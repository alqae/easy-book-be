import { Request, Response, NextFunction } from 'express';
import { sendResponse, verifyToken } from '../utils';

export function guestMiddleware(req: Request, res: Response, next: NextFunction): Response | void {
  const token = req.headers.authorization?.split(' ')[1]; // Assumes token is in the 'Authorization' header
  
  if (token) {
    const result = verifyToken(token);
    
    if (result) {
      return sendResponse(res, 'Already authenticated', null, 403);
    }
  }
  
  next();
}
