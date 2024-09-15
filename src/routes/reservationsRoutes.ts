import { Router } from 'express';

import { createReservationValidation, updateReservationValidation } from '../validations/reservationsValidations';
import * as reservationsController from '../controllers/reservationsController';
import { authenticatedMiddleware, validateRequest } from '../middlewares';

const reservationsRouter = Router();

reservationsRouter.get('/', authenticatedMiddleware, reservationsController.getReservations);
reservationsRouter.post('/', createReservationValidation, validateRequest, authenticatedMiddleware, reservationsController.createReservation);
reservationsRouter.patch('/:id', updateReservationValidation, validateRequest, authenticatedMiddleware, reservationsController.updateReservation);

export default reservationsRouter;
