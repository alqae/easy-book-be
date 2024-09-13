import { Router } from 'express';

import * as servicesController from '../controllers/servicesController';

const servicesRouter = Router();

servicesRouter.get('/', servicesController.testServices);

export default servicesRouter;
