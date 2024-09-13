import { Router } from 'express';

import * as profileController from '../controllers/profileController';
import { authenticatedMiddleware, validateRequest } from '../middlewares';
import {
  updatePasswordValidation,
  updateProfileValidation,
  updateRoleValidation
} from '../validations/profileValidations';

const profileRouter = Router();

profileRouter.get('/', authenticatedMiddleware, profileController.whoAmI);
profileRouter.patch('/', updateProfileValidation, validateRequest, authenticatedMiddleware, profileController.updateProfile);
profileRouter.patch('/password', updatePasswordValidation, validateRequest, authenticatedMiddleware, profileController.updatePassword);
profileRouter.patch('/role', updateRoleValidation, validateRequest, authenticatedMiddleware, profileController.updateRole);
// profileRouter.post('/invite-user', authenticatedMiddleware, profileController.inviteUser);

export default profileRouter;
