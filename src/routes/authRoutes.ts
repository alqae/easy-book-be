import { Router } from 'express';

import * as authController from '../controllers/authController';

const authRouter = Router();

authRouter.get('/', authController.testAuth);

export default authRouter;
