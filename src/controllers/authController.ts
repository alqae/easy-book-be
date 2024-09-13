import { Request, Response } from "express";

export const testAuth = (req: Request, res: Response): void => {
  res.status(200).send('Functioning perfectly! 🌟');
};
