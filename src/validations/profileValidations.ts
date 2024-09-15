import { body } from 'express-validator';

import { UserRole } from '../types/enums';

export const updateProfileValidation = [
  body('firstName')
    .notEmpty()
    .withMessage('Please enter your first name'),
  body('lastName')
    .notEmpty()
    .withMessage('Please enter your last name'),
  body('city')
    .notEmpty()
    .withMessage('Please enter your city'),
  body('country')
    .notEmpty()
    .withMessage('Please enter your country'),
  body('phoneNumber')
    .notEmpty()
    .withMessage('Please enter your phone number'),
  body('email')
    .notEmpty()
    .isEmail()
    .withMessage('Please enter a valid email address'),
];

export const updatePasswordValidation = [
  body('oldPassword')
    .notEmpty()
    .withMessage('Please enter your old password'),
  body('newPassword')
    .notEmpty()
    .withMessage('Please enter your new password'),
];

export const updateRoleValidation = [
  body('role')
    .notEmpty()
    .isIn(Object.values(UserRole)) // customer, business, employee or admin
    .withMessage(`Role must be one of the following: ${Object.values(UserRole).join(', ')}`),
];
