import { Router } from 'express';

import { searchCompaniesValidation } from '../validations/companiesValidations';
import * as companiesController from '../controllers/companiesController';
import { validateRequest } from '../middlewares';

const companiesRouter = Router();

companiesRouter.get('/', searchCompaniesValidation, validateRequest, companiesController.getCompanies);
companiesRouter.get('/:id', companiesController.getCompany);

export default companiesRouter;
