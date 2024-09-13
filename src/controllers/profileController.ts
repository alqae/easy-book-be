import { Request, Response } from 'express';

export const whoAmI = (req: Request, res: Response): void => {
  res.status(200).send('Functioning perfectly! 🌟');
};

export const updateProfile = (req: Request, res: Response): void => {
  res.status(200).send('Functioning perfectly! 🌟');
};

export const updatePassword = (req: Request, res: Response): void => {
  res.status(200).send('Functioning perfectly! 🌟');
};

export const updateRole = (req: Request, res: Response): void => {
  res.status(200).send('Functioning perfectly! 🌟');
};

export const inviteUser = (req: Request, res: Response): void => {
  res.status(200).send('Functioning perfectly! 🌟');
};
