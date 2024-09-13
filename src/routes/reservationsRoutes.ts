import { Router } from 'express';

import * as reservationsController from '../controllers/reservationsController';

const reservationsRouter = Router();

reservationsRouter.get('/', reservationsController.testReservations);

export default reservationsRouter;
