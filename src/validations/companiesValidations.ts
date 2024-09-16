import { query } from 'express-validator';

export const searchCompaniesValidation = [
  // Filters
  query('text').optional().isString().withMessage('Text is required'),
  query('city').optional().isString().withMessage('City is required'),
  query('country').optional().isString().withMessage('Country is required'),

  // Pagination
  query('limit').optional().isNumeric().withMessage('Limit must be a number'),
  query('offset').optional().isNumeric().withMessage('Offset must be a number'),
];
