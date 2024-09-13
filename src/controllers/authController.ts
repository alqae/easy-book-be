import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { decodeToken, generateToken, sendResponse, verifyToken } from '../utils';
import { AppDataSource } from '../data-source';
import { User } from '../models/User';

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    sendResponse(res, 'Bad credentials', null, 401);
    return;
  }

  const token = generateToken({ id: user.id.toString(), email: user.email });
  sendResponse(res, 'Welcome back!', { token }, 200);
};

export const register = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  const userRepository = AppDataSource.getRepository(User);
  const existingUser = await userRepository.findOne({ where: { email } });

  if (existingUser) {
    sendResponse(res, 'Email already in use', null, 400);
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = userRepository.create({
    ...req.body,
    password: hashedPassword,
  });

  await userRepository.save(newUser);
  sendResponse(res, 'User created successfully', null, 201);
};

export const logout = (req: Request, res: Response): void => {
  // TODO: implement redis cache to storage unauthorized tokens and refresh tokens
  res.status(200).send('Logged out successfully');
};

export async function refreshToken(req: Request, res: Response): Promise<void> {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    sendResponse(res, 'No refresh token provided', null, 400);
    return;
  }

  const isValid = verifyToken(refreshToken);
  
  if (!isValid) {
    sendResponse(res, 'Invalid refresh token', null, 401);
    return;
  }

  const payload = decodeToken(refreshToken);
  const newAccessToken = generateToken(payload);
  const newRefreshToken = generateToken(payload, 'refresh');

  sendResponse(res, 'Token refreshed', { accessToken: newAccessToken, refreshToken: newRefreshToken }, 200);
}

export const forgotPassword = (req: Request, res: Response): void => {
  res.status(200).send('Functioning perfectly! 🌟');
};

export const resetPassword = (req: Request, res: Response): void => {
  res.status(200).send('Functioning perfectly! 🌟');
};

export const verifyEmail = (req: Request, res: Response): void => {
  res.status(200).send('Functioning perfectly! 🌟');
};

export const resendVerificationEmail = (req: Request, res: Response): void => {
  res.status(200).send('Functioning perfectly! 🌟');
};
