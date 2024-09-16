import { body, query } from 'express-validator';

import { ReservationStatus } from '../types/enums';

export const createReservationValidation = [
  body('startTime')
    .notEmpty()
    .withMessage('Start date is required'),
  body('endTime')
    .notEmpty()
    .withMessage('End date is required'),
  body('serviceId')
    .notEmpty()
    .withMessage('Service is required'),
];

export const updateReservationValidation = [
  body('status')
    .optional()
    .isIn(Object.values(ReservationStatus)) // Pending, Confirmed, In Process, Completed, Canceled, No Show, Rescheduled
    .withMessage(`Role must be one of the following: ${Object.values(ReservationStatus).join(', ')}`),
  body('startTime')
    .notEmpty()
    .withMessage('Start time is required'),
  body('endTime')
    .notEmpty()
    .withMessage('End time is required'),
];

export const getReservationsValidation = [
  query('limit')
    .optional()
    .isNumeric()
    .withMessage('Limit must be a number'),
  query('offset')
    .optional()
    .isNumeric()
    .withMessage('Offset must be a number'),
];
