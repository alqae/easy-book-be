import { Router } from 'express';

import * as profileController from '../controllers/profileController';

const profileRouter = Router();

profileRouter.get('/whoami', profileController.whoAmI);
profileRouter.get('/update-profile', profileController.updateProfile);
profileRouter.get('/update-password', profileController.updatePassword);
profileRouter.get('/update-role', profileController.updateRole);
profileRouter.get('/invite-user', profileController.inviteUser);

export default profileRouter;
