import { Request, Response } from 'express';

import { cleanKeys, sendResponse } from '../utils';
import { RequestWithUser } from '../types/express';
import { AppDataSource } from '../data-source';
import { Service } from '../models';

const servicesRepository = AppDataSource.getRepository(Service);

export const createService = async (req: RequestWithUser, res: Response): Promise<Response> => {
  const newService = new Service();
  newService.name = req.body.name;
  newService.description = req.body.description;
  newService.duration = req.body.duration;
  newService.price = req.body.price;
  newService.user = req.user;
  const savedService = await servicesRepository.save(newService);
  return sendResponse(res, 'Service created successfully', cleanKeys(savedService), 201);
};

export const updateService = async (req: RequestWithUser, res: Response): Promise<Response> => {
  const { name, description, duration, price } = req.body;
  const service = await servicesRepository.findOne({ where: { id: parseInt(req.params.id) } });

  if (!service) {
    return sendResponse(res, 'Service not found', null, 404);
  }

  service.name = name;
  service.description = description;
  service.duration = duration;
  service.price = price;
  const updatedService = await servicesRepository.save(service);
  
  delete updatedService.user;
  return sendResponse(res, 'Service updated successfully', cleanKeys(updatedService), 200);
};

export const deleteService = async (req: Request, res: Response): Promise<Response> => {
  const service = await servicesRepository.findOne({ where: { id: parseInt(req.params.id) } });

  if (!service) {
    return sendResponse(res, 'Service not found', null, 404);
  }

  await servicesRepository.remove(service);
  return sendResponse(res, 'Service deleted successfully', null, 200);
};
