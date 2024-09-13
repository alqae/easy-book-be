import { Request, Response, NextFunction } from 'express';

import { verifyToken, decodeToken, sendResponse } from '../utils';
import { UserPayload } from '@/models/User';

interface RequestWithUser extends Request {
  user: UserPayload;
}

export function authenticatedMiddleware(req: Request, res: Response, next: NextFunction): Response | void {
  const token = req.headers.authorization?.split(' ')[1]; // Assumes token is in the 'Authorization' header
  
  if (!token) {
    return sendResponse(res, 'No token provided', null, 401);
  }
  
  const result = verifyToken(token);
  
  if (result) {
    (req as RequestWithUser).user = decodeToken(token) as UserPayload;
    next();
  } else {
    sendResponse(res, 'Invalid token', null, 401);
  }
}
