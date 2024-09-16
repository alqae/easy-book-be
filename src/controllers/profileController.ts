import { Response } from 'express';
import bcrypt from 'bcrypt';

import { cleanKeys, sendResponse } from '../utils';
import { RequestWithUser } from '../types/express';
import { AppDataSource } from '../data-source';
import { UserStatus } from '../types/enums';
import { User } from '../models';

const userRepository = AppDataSource.getRepository(User);

export const whoAmI = async (req: RequestWithUser, res: Response): Promise<Response<User>> => {
  const me = await userRepository.findOne({
    where: { email: req.user.email },
    relations: [
      'customerReservations',
      'customerReservations.service',
      'businessReservations',
      'businessReservations.service',
      'services',
      'avatar'
    ],
  });

  return sendResponse(res, 'Profile fetched successfully', cleanKeys(me), 200);
};

export const updateProfile = async (req: RequestWithUser, res: Response): Promise<Response> => {
  await userRepository.update({ email: req.user.email }, req.body);
  return sendResponse(res, 'Profile updated successfully', null, 200);
};

export const updatePassword = async (req: RequestWithUser, res: Response): Promise<Response> => {
  const { oldPassword, newPassword } = req.body;

  const { password: savedPassword } = await userRepository.findOne({
    where: { email: req.user.email },
    select: ['password']
  });
  const isValidOldPassword = await bcrypt.compare(oldPassword, savedPassword);

  if (!isValidOldPassword) {
    return sendResponse(res, 'Bad credentials', null, 400);
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await userRepository.update({ email: req.user.email }, { password: hashedPassword });

  return sendResponse(res, 'Password updated successfully', null, 200);
};

export const updateRole = async (req: RequestWithUser, res: Response): Promise<Response> => {
  await userRepository.update({ email: req.user.email }, { role: req.body.role });
  return sendResponse(res, 'Role updated successfully', null, 200);
};

export const deleteProfile = async (req: RequestWithUser, res: Response): Promise<Response> => {
  await userRepository.update({ email: req.user.email }, { status: UserStatus.INACTIVE });
  return sendResponse(res, 'Profile deleted successfully', null, 200);
};

// export const inviteUser = (req: Request, res: Response): void => {
//   res.status(200).send('Functioning perfectly! 🌟');
// };
