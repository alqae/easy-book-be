import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { EmailTemplate, TokenStatus, TokenType, UserStatus } from '../types/enums';
import { RequestWithUser } from '../types/express';
import { AppDataSource } from '../data-source';
import { User, Token } from '../models';
import {
  decodeToken,
  generateToken,
  sendEmail,
  sendResponse,
  verifyToken
} from '../utils';

const userRepository = AppDataSource.getRepository(User);
const tokenRepository = AppDataSource.getRepository(Token);

export const login = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;

  const user = await userRepository.findOne({ where: { email }, select: ['id', 'email', 'password'] });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return sendResponse(res, 'Bad credentials', null, 401);
  }

  const token = generateToken({ id: user.id, email: user.email });
  return sendResponse(res, 'Welcome back!', { token }, 200);
};

export const register = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;

  const existingUser = await userRepository.findOne({ where: { email } });

  if (existingUser) {
    return sendResponse(res, 'Email already in use', null, 400);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User();
  Object.assign(newUser, req.body);
  newUser.password = hashedPassword;
  newUser.status = UserStatus.UNVERIFIED;

  const user = await userRepository.save(newUser);

  // Generate and save verification token
  const tokenValue = generateToken({ id: user.id, email: user.email }, 'verify');
  const newToken = new Token();
  newToken.value = tokenValue;
  newToken.type = TokenType.VERIFY_EMAIL;
  newToken.status = TokenStatus.ACTIVE;
  await tokenRepository.save(newToken);

  const protocol = req.protocol;
  const host = req.get('host');
  const baseUrl = `${protocol}://${host}`;
  await sendEmail(email, 'Verify your email', EmailTemplate.VERIFICATION, {
    fullName: `${user.firstName} ${user.lastName}`,
    link: `${baseUrl}/auth/verify-email?token=${tokenValue}`,
  });

  return sendResponse(res, 'User created successfully', null, 201);
};

export async function refreshToken(req: Request, res: Response): Promise<Response> {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return sendResponse(res, 'No refresh token provided', null, 400);
  }

  const isValid = verifyToken(refreshToken);
  
  if (!isValid) {
    return sendResponse(res, 'Invalid refresh token', null, 401);
  }

  const payload = decodeToken(refreshToken, 'refresh');
  const newAccessToken = generateToken(payload);
  const newRefreshToken = generateToken(payload, 'refresh');

  return sendResponse(
    res,
    'Token refreshed',
    { accessToken: newAccessToken, refreshToken: newRefreshToken },
    200
  );
};

export const verifyEmail = async (req: Request, res: Response): Promise<Response> => {
  const { token } = req.query;

  if (!token) {
    return sendResponse(res, 'No token provided', null, 400);
  }

  const isValid = verifyToken(token as string, 'verify');
  if (!isValid) {
    return sendResponse(res, 'Invalid token a', null, 401);
  }

  const savedToken = await tokenRepository.findOne({ where: { value: token as string } });

  if (!savedToken || savedToken.status === TokenStatus.EXPIRED) {
    return sendResponse(res, 'Token expired', null, 401);
  }

  savedToken.status = TokenStatus.EXPIRED;
  await tokenRepository.save(savedToken);

  const payload = decodeToken(token as string, 'verify');
  const user = await userRepository.findOne({ where: { email: payload.email } });

  if (user.status !== UserStatus.UNVERIFIED) {
    return sendResponse(res, 'User already verified', null, 401);
  }

  user.verifyEmailAt = new Date();
  user.status = UserStatus.ACTIVE;
  await userRepository.save(user);

  return sendResponse(res, 'Email verified successfully', null, 200);
};

export const resendVerificationEmail = async (req: RequestWithUser, res: Response): Promise<Response> => {
  const protocol = req.protocol;
  const host = req.get('host');
  const baseUrl = `${protocol}://${host}`;

  // Generate and save verification token
  const tokenValue = generateToken({ id: req.user.id, email: req.user.email }, 'verify');
  const newToken = new Token();
  newToken.value = tokenValue;
  newToken.type = TokenType.VERIFY_EMAIL;
  newToken.status = TokenStatus.ACTIVE;
  await tokenRepository.save(newToken);

  await sendEmail(req.user.email, 'Verify your email', EmailTemplate.VERIFICATION, {
    fullName: `${req.user.firstName} ${req.user.lastName}`,
    link: `${baseUrl}/auth/verify-email?token=${tokenValue}`,
  });

  return sendResponse(res, 'Email sent successfully', null, 200);
};

export const logout = (req: Request, res: Response): void => {
  // TODO: implement redis cache to storage unauthorized tokens and refresh tokens
  res.status(200).send('Logged out successfully');
};

export const forgotPassword = async (req: Request, res: Response): Promise<Response> => {
  const { email } = req.body;

  const user = await userRepository.findOne({ where: { email } });
  if (!user) {
    return sendResponse(res, 'User not found', null, 404);
  }

  const newToken = new Token();
  const tokenValue = generateToken({ id: user.id, email: user.email }, 'reset');;
  newToken.value = tokenValue;
  newToken.type = TokenType.FORGOT_PASSWORD;
  newToken.status = TokenStatus.ACTIVE;
  await tokenRepository.save(newToken);

  const protocol = req.protocol;
  const host = req.get('host');
  const baseUrl = `${protocol}://${host}`;

  await sendEmail(email, 'Reset your password', EmailTemplate.FORGOT_PASSWORD, {
    fullName: `${user.firstName} ${user.lastName}`,
    link: `${baseUrl}/auth/reset-password?token=${tokenValue}`,
  });

  return sendResponse(res, 'Email sent successfully', null, 200);
};

export const resetPassword = async (req: Request, res: Response): Promise<Response> => {
  const { token, password } = req.body;
  
  const savedToken = await tokenRepository.findOne({ where: { value: token } });
  
  if (!savedToken || savedToken.status !== TokenStatus.ACTIVE) {
    return sendResponse(res, 'Invalid token', null, 401);
  }

  // Expire token
  savedToken.status = TokenStatus.EXPIRED;
  await tokenRepository.save(savedToken);

  const payload = decodeToken(token, 'reset');
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userRepository.findOne({ where: { email: payload.email } });
  user.password = hashedPassword;
  await userRepository.save(user);

  return sendResponse(res, 'Password reset successfully', null, 200);
};
