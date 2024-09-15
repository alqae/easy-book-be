import { Request, Response, NextFunction } from 'express';

import { verifyToken, decodeToken, sendResponse } from '../utils';
import { RequestWithUser } from '../types/express';
import { AppDataSource } from '../data-source';
import { User } from '../models/User';

export const authenticatedMiddleware = async (
  req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const token = req.headers.authorization?.split(' ')[1]; // Assumes token is in the 'Authorization' header
  
  if (!token) {
    return sendResponse(res, 'Unauthorized', null, 401);
  }

  const result = verifyToken(token);
  
  if (result) {
    const payload = decodeToken(token);
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { email: payload.email } });
    delete user.password;
    (req as RequestWithUser).user = user;
    next();
  } else {
    sendResponse(res, 'Unauthorized', null, 401);
  }
}
