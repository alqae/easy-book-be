import { Response } from 'express';

import { cleanKeys, sendResponse } from '../utils';
import { RequestWithUser } from '../types/express';
import { AppDataSource } from '../data-source';
import { UserRole } from '../types/enums';
import { User } from '../models';

const userRepository = AppDataSource.getRepository(User);

export const getCustomer = async (req: RequestWithUser, res: Response): Promise<Response<User>> => {
  const customer = await userRepository.findOne({
    where: { id: parseInt(req.params.id), role: UserRole.CUSTOMER },
    relations: ['avatar']
  });

  if (!customer) {
    return sendResponse(res, 'Customer not found', null, 404);
  }

  return sendResponse(res, 'Customer fetched successfully', cleanKeys(customer), 200);
};
