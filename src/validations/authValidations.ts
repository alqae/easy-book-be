import { body } from 'express-validator';

export const authenticateValidation = [
  body('email')
    .notEmpty()
    .isEmail()
    .withMessage('Please enter a valid email address'),
  body('password')
    .notEmpty()
    .withMessage('Please enter a password'),
];

export const registerValidation = [
  body('firstName')
    .notEmpty()
    .withMessage('First name is required'),
  body('lastName')
    .notEmpty()
    .withMessage('Last name is required'),
  body('city')
    .notEmpty()
    .withMessage('City is required'),
  body('country')
    .notEmpty()
    .withMessage('Country is required'),
  body('phoneNumber')
    .notEmpty()
    .withMessage('Phone number is required'),
  body('email')
    .notEmpty()
    .isEmail()
    .withMessage('Please enter a valid email address'),
  body('password')
    .isString()
    .notEmpty()
    .withMessage('Password is required'),
  body('token')
    .optional()
    .isString(),
  body('description')
    .optional()
    .isString(),
  body('address')
    .optional()
    .isString(),
  body('role')
    .notEmpty()
    .isIn(Object.values(UserRole))
    .withMessage(`Role must be one of the following: ${Object.values(UserRole).join(', ')}`),
];

export const forgotPasswordValidation = [
  body('email')
    .notEmpty()
    .isEmail()
    .withMessage('Please enter a valid email address'),
];

export const resetPasswordValidation = [
  body('token')
    .notEmpty()
    .isString(),
  body('password')
    .isString()
    .notEmpty()
    .withMessage('Password is required'),
  body('confirmPassword')
    .isString()
    .notEmpty()
    .withMessage('Confirm password is required')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords do not match');
      }
      return true;
    }),
];
