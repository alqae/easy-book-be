import { Router } from 'express';

import * as authController from '../controllers/authController';

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
authRouter.get('/login', authController.login);
authRouter.get('/logout', authController.logout);
authRouter.get('/refresh-token', authController.refreshToken);
authRouter.get('/register', authController.register);
authRouter.get('/forgot-password', authController.forgotPassword);
authRouter.get('/reset-password', authController.resetPassword);
authRouter.get('/verify-email', authController.verifyEmail);
authRouter.get('/resend-verification-email', authController.resendVerificationEmail);

export default authRouter;
