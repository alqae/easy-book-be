import { Request, Response } from 'express';

export const getCompanies = (req: Request, res: Response): void => {
  res.status(200).send('Functioning perfectly! 🌟');
}

export const getCompany = (req: Request, res: Response): void => {
  res.status(200).send('Functioning perfectly! 🌟');
}
