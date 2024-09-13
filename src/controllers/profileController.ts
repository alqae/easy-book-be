import { Response } from 'express';
import bcrypt from 'bcrypt';

import { RequestWithUser } from '../types/express';
import { AppDataSource } from '../data-source';
import { sendResponse } from '../utils';
import { User } from '../models';

const userRepository = AppDataSource.getRepository(User);

export const whoAmI = (req: RequestWithUser, res: Response): void => {
  sendResponse(res, ':)', req.user);
};

export const updateProfile = async (req: RequestWithUser, res: Response): Promise<void> => {
  await userRepository.update({ email: req.user.email }, req.body);
  sendResponse(res, 'Profile updated successfully', null, 200);
};

export const updatePassword = async (req: RequestWithUser, res: Response): Promise<void> => {
  const { oldPassword, newPassword } = req.body;

  const { password: savedPassword } = await userRepository.findOne({ where: { email: req.user.email } });
  const isValidOldPassword = await bcrypt.compare(oldPassword, savedPassword);
  if (!isValidOldPassword) {
    sendResponse(res, 'Bad credentials', null, 400);
    return;
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await userRepository.update({ email: req.user.email }, { password: hashedPassword });
  sendResponse(res, 'Password updated successfully', null, 200);
};

export const updateRole = async (req: RequestWithUser, res: Response): Promise<void> => {
  await userRepository.update({ email: req.user.email }, { role: req.body.role });
  sendResponse(res, 'Role updated successfully', null, 200);
};

// export const inviteUser = (req: Request, res: Response): void => {
//   res.status(200).send('Functioning perfectly! 🌟');
// };
