import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

import * as sharedController from '../controllers/sharedController';

const sharedRouter = Router();

sharedRouter.get('/countries', sharedController.getCountries);
sharedRouter.get('/cities/:country', sharedController.getCitiesByCountry);

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    const customPath = 'uploads/custom'; // Puedes personalizar esta ruta
    fs.mkdirSync(customPath, { recursive: true }); // Crear la carpeta si no existe
    cb(null, customPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });
sharedRouter.post('/upload-file', upload.single('file'), sharedController.uploadFile);
sharedRouter.get('/download-file/:id', sharedController.downloadFile);
sharedRouter.get('/get-file/:id', sharedController.getFile);

export default sharedRouter;
