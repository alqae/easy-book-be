import { Router } from 'express';

import * as customerController from '../controllers/customerController';
import { authenticatedMiddleware } from '../middlewares';

const customerRouter = Router();

customerRouter.get('/:id', authenticatedMiddleware, customerController.getCustomer);

export default customerRouter;
