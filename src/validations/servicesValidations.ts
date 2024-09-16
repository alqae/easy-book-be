import { body, query } from 'express-validator';

export const createServiceValidation = [
  body('name')
    .isString()
    .notEmpty()
    .withMessage('Name is required'),
  body('description')
    .isString()
    .notEmpty()
    .withMessage('Description is required'),
  body('duration')
    .isString() // format: 1h 30m or 2d 3h
    .notEmpty()
    .withMessage('Duration is required'),
  body('price')
    .notEmpty()
    .isNumeric()
    .withMessage('Price is required'),
];

export const updateServiceValidation = [
  body('name')
    .isString()
    .notEmpty()
    .withMessage('Name is required'),
  body('description')
    .isString()
    .notEmpty()
    .withMessage('Description is required'),
  body('duration')
    .isString() // format: 1h 30m or 2d 3h
    .notEmpty()
    .withMessage('Duration is required'),
  body('price')
    .notEmpty()
    .isNumeric()
    .withMessage('Price is required'),
];

export const getAviableHoursValidation = [
  query('serviceId')
    .notEmpty()
    .withMessage('Service is required'),
  query('date')
    .notEmpty()
    .withMessage('Date is required'),
];
