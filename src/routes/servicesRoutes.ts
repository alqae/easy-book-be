import { Router } from 'express';

import { createServiceValidation, updateServiceValidation } from '../validations/servicesValidations';
import { authenticatedMiddleware, validateRequest } from '../middlewares';
import * as servicesController from '../controllers/servicesController';

const servicesRouter = Router();

servicesRouter.post('/', createServiceValidation, validateRequest, authenticatedMiddleware, servicesController.createService);
servicesRouter.patch('/:id', updateServiceValidation, validateRequest, authenticatedMiddleware, servicesController.updateService);
servicesRouter.delete('/:id', authenticatedMiddleware, servicesController.deleteService);

export default servicesRouter;
