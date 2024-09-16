import { Request, Response } from 'express';

import { cleanKeys, parseDuration, sendResponse } from '../utils';
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

export const getAvailableHours = async (req: Request, res: Response): Promise<Response> => {
  const { serviceId, date } = req.query;
  
  const service = await servicesRepository.findOne({
    where: { id: parseInt(serviceId as string) },
    relations: ['reservations']
  });

  if (!service) {
    return sendResponse(res, 'Service not found', null, 404);
  }

  const parsedDate = new Date(date as string);
  parsedDate.setHours(0, 0, 0, 0);
  const day = parsedDate.getDate();
  const year = parsedDate.getFullYear();
  const month = parsedDate.getMonth() + 1;
  
  const startOfDay = new Date(year, month - 1, day, 0, 0, 0);

  const reservations = await servicesRepository
    .createQueryBuilder('services')
    .leftJoinAndSelect('services.reservations', 'reservations')
    .where('services.id = :serviceId', { serviceId: parseInt(serviceId as string) })
    .andWhere('DATE(reservations.startTime) = :date', { date: startOfDay.toISOString().split('T')[0] })
    .getMany();

  const occupiedHours: string[] = reservations.flatMap(service =>
    service.reservations.map(reservation => {
      const startTime = new Date(reservation.startTime);
      return `${String(startTime.getHours()).padStart(2, '0')}:${String(startTime.getMinutes()).padStart(2, '0')}`;
    })
  );

  const serviceDurationInMinutes = parseDuration(service.duration || '1h');
  const startOfDayMinutes = 0;
  const endOfDayMinutes = 24 * 60;
  const availableHours: string[] = [];

  for (let minutes = startOfDayMinutes; minutes <= endOfDayMinutes - serviceDurationInMinutes; minutes += 30) {
    const proposedStartMinutes = minutes;
    const proposedStartTime = new Date(year, month - 1, day, Math.floor(proposedStartMinutes / 60), proposedStartMinutes % 60);

    const proposedStartTimeStr = `${String(proposedStartTime.getHours()).padStart(2, '0')}:${String(proposedStartTime.getMinutes()).padStart(2, '0')}`;
    
    if (!occupiedHours.includes(proposedStartTimeStr)) {
      availableHours.push(proposedStartTimeStr);
    }
  }

  // Filter only hours from 6am to 10pm
  const filteredAvailableHours = availableHours.filter(hour => {
    const [hourStr, _] = hour.split(':');
    const hourInt = parseInt(hourStr);
    return hourInt >= 6 && hourInt <= 22;
  });

  return sendResponse(res, 'Available hours fetched successfully', filteredAvailableHours, 200);
};