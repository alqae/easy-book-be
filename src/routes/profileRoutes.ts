import { Router } from 'express';

import * as profileController from '../controllers/profileController';

const profileRouter = Router();

profileRouter.get('/', profileController.testProfile);

export default profileRouter;
