import { Request, Response } from 'express';

export const getCountries = (req: Request, res: Response): void => {
  res.status(200).send('Functioning perfectly! 🌟');
};

export const getCitiesByCountry = (req: Request, res: Response): void => {
  res.status(200).send('Functioning perfectly! 🌟');
};

export const uploadFile = (req: Request, res: Response): void => {
  res.status(200).send('Functioning perfectly! 🌟');
};

export const downloadFile = (req: Request, res: Response): void => {
  res.status(200).send('Functioning perfectly! 🌟');
};

export const getFile = (req: Request, res: Response): void => {
  res.status(200).send('Functioning perfectly! 🌟');
};
