import { Router } from 'express';

import * as servicesController from '../controllers/servicesController';

const servicesRouter = Router();

servicesRouter.get('/', servicesController.createService);
servicesRouter.get('/:id', servicesController.updateService);
servicesRouter.delete('/:id', servicesController.deleteService);

export default servicesRouter;
