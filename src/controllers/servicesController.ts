import { Request, Response } from 'express';

import { RequestWithUser } from '../types/express';
import { AppDataSource } from '../data-source';
import { Service, User } from '../models';
import { sendResponse } from '../utils';

const servicesRepository = AppDataSource.getRepository(Service);
const userRepository = AppDataSource.getRepository(User);

export const createService = async (req: RequestWithUser, res: Response): Promise<Response> => {
  const newService = new Service();
  newService.name = req.body.name;
  newService.description = req.body.description;
  newService.duration = req.body.duration;
  newService.price = req.body.price;
  newService.user = req.user;
  await servicesRepository.save(newService);

  const company = await userRepository.findOne({
    where: { id: req.user.id },
    relations: ['services']
  });

  if (!company.services || company.services.length === 0) {
    company.services = [newService];
  } else {
    company.services = [...company.services, newService];
  }

  await userRepository.save(company);

  return sendResponse(res, 'Service created successfully', null, 201);
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
  await servicesRepository.save(service);
  
  return sendResponse(res, 'Service updated successfully', null, 200);
};

export const deleteService = async (req: Request, res: Response): Promise<Response> => {
  const service = servicesRepository.findOne({ where: { id: parseInt(req.params.id) } });

  if (!service) {
    return sendResponse(res, 'Service not found', null, 404);
  }

  return sendResponse(res, 'Service deleted successfully', null, 200);
};
