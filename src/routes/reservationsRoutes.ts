import { Router } from 'express';

import * as reservationsController from '../controllers/reservationsController';

const reservationsRouter = Router();

reservationsRouter.get('/', reservationsController.getReservations);
reservationsRouter.post('/', reservationsController.createReservation);
reservationsRouter.patch('/:id', reservationsController.updateReservation);

export default reservationsRouter;
