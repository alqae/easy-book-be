import { Request, Response } from 'express';

export const createService = (req: Request, res: Response): void => {
  res.status(200).send('Functioning perfectly! 🌟');
};

export const updateService = (req: Request, res: Response): void => {
  res.status(200).send('Functioning perfectly! 🌟');
};

export const deleteService = (req: Request, res: Response): void => {
  res.status(200).send('Functioning perfectly! 🌟');
};
