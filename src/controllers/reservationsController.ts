import { Request, Response } from "express";

export const testReservations = (req: Request, res: Response): void => {
  res.status(200).send('Functioning perfectly! 🌟');
};
