import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

import { AttachmentGroup } from '../types/enums';
import { AppDataSource } from '../data-source';
import { sendResponse } from '../utils';
import { Attachment, User } from '../models';

const userRepository = AppDataSource.getRepository(User);
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

export const uploadFile = async (req: Request, res: Response): Promise<Response> => {
  const file = req.file;

  if (!file) {
    return sendResponse(res, 'File not found', null, 404);
  }

  const group = req.params.group as AttachmentGroup;

  if (!Object.values(AttachmentGroup).includes(group)) {
    return sendResponse(res, 'Invalid group', null, 400);
  }

  const attachment = new Attachment();
  attachment.filename = file.filename;
  attachment.originalName = file.originalname;
  attachment.path = file.path;
  attachment.group = group;
  attachment.size = file.size;

  const savedAttachment = await attachmentRepository.save(attachment);

  switch (group) {
    case AttachmentGroup.AVATARS:
      const user = await userRepository.findOne({ where: { id: req.user.id } });
      user.avatar = savedAttachment;
      await userRepository.save(user);
      break;
  
    default:
      break;
  }

  return sendResponse(res, 'File uploaded successfully!', savedAttachment, 200);
};

export const downloadFile = async (req: Request, res: Response): Promise<Response | void> => {
  const attachmentId = parseInt(req.params.id);
  const attachment = await attachmentRepository.findOne({ where: { id: attachmentId } });

  if (!attachment) {
    return sendResponse(res, 'Attachment not found', null, 404);
  }

  const filePath = path.join(__dirname, '../..', attachment.path);
  return res.download(filePath, attachment.originalName);
};

export const getFile = async (req: Request, res: Response): Promise<Response | void> => {
  const attachmentId = parseInt(req.params.id);
  const attachment = await attachmentRepository.findOne({ where: { id: attachmentId } });

  if (!attachment) {
    return sendResponse(res, 'Attachment not found', null, 404);
  }

  const filePath = path.join(__dirname, '../..', attachment.path);
  return res.sendFile(filePath);
};
