import { Router } from 'express';

import * as sharedController from '../controllers/sharedController';

const sharedRouter = Router();

sharedRouter.get('/', sharedController.testShared);

export default sharedRouter;
