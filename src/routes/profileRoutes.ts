import { Router } from 'express';

import { authenticatedMiddleware, userStatusMiddleware, validateRequest } from '../middlewares';
import * as profileController from '../controllers/profileController';
import { UserStatus } from '../types/enums';
import {
  updatePasswordValidation,
  updateProfileValidation,
  updateRoleValidation
} from '../validations/profileValidations';

const profileRouter = Router();

profileRouter.get(
  '/',
  authenticatedMiddleware, userStatusMiddleware(UserStatus.ACTIVE, UserStatus.UNVERIFIED),  
  profileController.whoAmI
);
profileRouter.patch(
  '/',
  updateProfileValidation, validateRequest, authenticatedMiddleware, userStatusMiddleware(UserStatus.ACTIVE),
  profileController.updateProfile
);
profileRouter.delete('/', authenticatedMiddleware, userStatusMiddleware(UserStatus.ACTIVE), profileController.deleteProfile)
profileRouter.patch(
  '/password',
  updatePasswordValidation, validateRequest, authenticatedMiddleware, userStatusMiddleware(UserStatus.ACTIVE),
  profileController.updatePassword
);
profileRouter.patch(
  '/role',
  updateRoleValidation, validateRequest, authenticatedMiddleware, userStatusMiddleware(UserStatus.ACTIVE),
  profileController.updateRole
);
// profileRouter.post('/invite-user', authenticatedMiddleware, profileController.inviteUser);

export default profileRouter;
