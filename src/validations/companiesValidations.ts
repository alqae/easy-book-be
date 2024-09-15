import { query } from 'express-validator';

export const searchCompaniesValidation = [
  query('text').optional().isString().withMessage('Text is required'),
  query('city').optional().isString().withMessage('City is required'),
  query('country').optional().isString().withMessage('Country is required'),
];
