import { Router } from 'express';

import * as authController from '../controllers/authController';
import { authenticatedMiddleware, guestMiddleware, validateRequest } from '../middlewares';
import {
  authenticateValidation,
  registerValidation,
  forgotPasswordValidation,
  resetPasswordValidation
} from '../validations/authValidations';

const authRouter = Router();

/**
 * @swagger
 * /auth:
 *   get:
 *     summary: Obtiene un ejemplo
 *     responses:
 *       200:
 *         description: Ejemplo obtenido exitosamente
 */
authRouter.post('/login', authenticateValidation, validateRequest, guestMiddleware, authController.login);
authRouter.post('/logout', authenticatedMiddleware, authController.logout);
authRouter.post('/refresh-token', authenticatedMiddleware, authController.refreshToken);
authRouter.post('/register', registerValidation, validateRequest, guestMiddleware, authController.register);
authRouter.post('/forgot-password', forgotPasswordValidation, validateRequest, authController.forgotPassword);
authRouter.post('/reset-password', resetPasswordValidation, validateRequest, authController.resetPassword);
authRouter.post('/verify-email', authController.verifyEmail);
authRouter.post('/resend-verification-email', authController.resendVerificationEmail);

export default authRouter;
