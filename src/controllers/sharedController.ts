import { Request, Response } from "express";

export const testShared = (req: Request, res: Response): void => {
  res.status(200).send('Functioning perfectly! 🌟');
};
