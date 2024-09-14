import { User } from '../models/User';

import { Request } from 'express';

export interface RequestWithUser extends Request {
  user: User;
}

declare global {
  namespace Express {
    interface Request {
      user?: User
    }
  }
}
