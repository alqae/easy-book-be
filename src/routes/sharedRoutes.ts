import { Router } from 'express';

import * as sharedController from '../controllers/sharedController';

const sharedRouter = Router();

sharedRouter.get('/countries', sharedController.getCountries);
sharedRouter.get('/cities/:country', sharedController.getCitiesByCountry);
sharedRouter.post('/upload-file', sharedController.uploadFile);
sharedRouter.get('/download-file', sharedController.downloadFile);
sharedRouter.get('/file/:id', sharedController.getFile);

export default sharedRouter;
