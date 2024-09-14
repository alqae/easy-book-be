import { Request, Response } from 'express';
import multer from 'multer';
import fs from 'fs';

import { AppDataSource } from '../data-source';
import { sendResponse } from '../utils';
import { Attachment } from '../models';
import { ObjectId } from 'mongodb';
import path from 'path';

const attachmentRepository = AppDataSource.getRepository(Attachment);

export const getCountries = (req: Request, res: Response): void => {
  // TODO: implement caching and pagination
  const countriesData = fs.readFileSync('./src/data/countries.json', 'utf-8');
  sendResponse(res, 'Countries fetched successfully', JSON.parse(countriesData), 200);
};

export const getCitiesByCountry = (req: Request, res: Response): void => {
  // TODO: implement caching and pagination
  const citiesData = fs.readFileSync(`./src/data/cities/${req.params.country}.json`, 'utf-8');
  const { cities } = JSON.parse(citiesData);
  sendResponse(res, 'Cities fetched successfully', cities, 200);
};

export const uploadFile = async (req: Request, res: Response): Promise<void> => {
  const file = req.file;

  if (!file) {
    res.status(400).send('No file uploaded.');
    return;
  }

  const attachment = new Attachment();
  attachment.filename = file.filename;
  attachment.originalName = file.originalname;
  attachment.path = file.path;

  await attachmentRepository.save(attachment);
  sendResponse(res, 'File uploaded successfully!', null, 200);
};

export const downloadFile = async (req: Request, res: Response): Promise<void> => {
  const attachmentId = new ObjectId(req.params.id);
  const attachment = await attachmentRepository.findOne({ where: { _id: attachmentId } });
  const filePath = path.join(__dirname, '../..', attachment.path);
  res.download(filePath, attachment.originalName);
};

export const getFile = async (req: Request, res: Response): Promise<void> => {
  const attachmentId = new ObjectId(req.params.id);
  const attachment = await attachmentRepository.findOne({ where: { _id: attachmentId } });
  const filePath = path.join(__dirname, '../..', attachment.path);
  res.sendFile(filePath);
};
