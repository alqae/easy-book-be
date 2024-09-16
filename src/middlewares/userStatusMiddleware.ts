import { Request, Response, NextFunction } from 'express';

import { UserStatus } from '../types/enums';
import { sendResponse } from '../utils';

export const userStatusMiddleware = (...status: UserStatus[]) => (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    return sendResponse(res, 'Unauthorized', null, 401);
  }

  if (!status.includes(req.user.status)) {
    return sendResponse(res, 'User status is not allowed to perform this action', null, 401);
  }

  next();
};
