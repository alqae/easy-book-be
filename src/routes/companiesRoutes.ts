import { Router } from 'express';

import * as companiesController from '../controllers/companiesController';

const companiesRouter = Router();

companiesRouter.get('/', companiesController.getCompanies);
companiesRouter.get('/:id', companiesController.getCompany);

export default companiesRouter;
