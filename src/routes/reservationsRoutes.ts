import { Router } from 'express';

import * as reservationsController from '../controllers/reservationsController';
import { authenticatedMiddleware, validateRequest } from '../middlewares';
import {
  createReservationValidation,
  getReservationsValidation,
  updateReservationValidation
} from '../validations/reservationsValidations';

const reservationsRouter = Router();

reservationsRouter.get('/', getReservationsValidation, validateRequest, authenticatedMiddleware, reservationsController.getReservations);
reservationsRouter.post('/', createReservationValidation, validateRequest, authenticatedMiddleware, reservationsController.createReservation);
reservationsRouter.patch('/:id', updateReservationValidation, validateRequest, authenticatedMiddleware, reservationsController.updateReservation);

export default reservationsRouter;
