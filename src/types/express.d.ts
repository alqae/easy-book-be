import { User, UserPayload } from '../models/User';

import { Request } from 'express';

export interface RequestWithUser extends Request {
  user: Omit<User, 'id'> & { id: string; }; // On enconde/decode token the ObjectId is converted to string
}

declare global {
  namespace Express {
    interface Request {
      user?: RequestWithUser['user'];
    }
  }
}
