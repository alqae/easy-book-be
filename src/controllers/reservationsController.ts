import { Request, Response } from 'express';
import { FindOptionsWhere } from 'typeorm';

import { ReservationStatus, UserRole } from '../types/enums';
import { Reservation, Service, User } from '../models';
import { PaginationResponse } from '../types/response';
import { cleanKeys, sendResponse } from '../utils';
import { RequestWithUser } from '../types/express';
import { AppDataSource } from '../data-source';

const reservationRepository = AppDataSource.getRepository(Reservation);
const serviceRepository = AppDataSource.getRepository(Service);
const userRepository = AppDataSource.getRepository(User);

export const getReservations = async (req: Request, res: Response): Promise<Response<PaginationResponse<Reservation>>> => {
  const { limit: _limit, offset: _offset } = req.query;
  const limit = parseInt(_limit as string) || 10;
  const offset = parseInt(_offset as string) || 0;

  const query: FindOptionsWhere<Reservation> = {};

  if (req.user.role === UserRole.CUSTOMER) {
    query.customer = { id: req.user.id };
  }
   else if (req.user.role === UserRole.BUSINESS) {
    query.business = { id: req.user.id };
  }

  const count = await reservationRepository.count({ where: query });
  const reservations = await reservationRepository.find({
    where: query,
    relations: ['customer', 'business', 'service'],
    skip: offset,
    take: limit
  });

  return sendResponse(res, 'Reservations fetched successfully', { items: cleanKeys(reservations), count }, 200);
};

export const createReservation = async (req: RequestWithUser, res: Response): Promise<Response<Reservation>> => {
  const { startTime, endTime, serviceId } = req.body;

  const business = await userRepository.findOne({ where: { id: req.user.id, role: UserRole.BUSINESS } });
  const service = await serviceRepository.findOne({ where: { id: serviceId } });

  const reservation = new Reservation();
  reservation.startTime = startTime;
  reservation.endTime = endTime;
  reservation.service = service;
  reservation.customer = req.user;
  reservation.business = business;
  reservation.status = ReservationStatus.PENDING;

  const savedReservation = await reservationRepository.save(reservation);

  return sendResponse(res, 'Reservation created successfully', cleanKeys(savedReservation), 201);  
};

export const updateReservation = async (req: RequestWithUser, res: Response): Promise<Response<Reservation>> => {
  let reservation = await reservationRepository.findOne({
    where: { id: parseInt(req.params.id) },
    relations: ['customer', 'business', 'service']
  });

  if (!reservation) {
    return sendResponse(res, 'Reservation not found', null, 404);
  }

  reservation = cleanKeys(reservation);
  const allowedUsers = [reservation.customer.id, reservation.business.id];

  if (!allowedUsers.includes(req.user.id)) {
    return sendResponse(res, 'You are not authorized to update this reservation', null, 403);
  }

  // TODO: Add validation to prevent overlapping reservations
  Object.assign(reservation, req.body);
  const updatedReservation = await reservationRepository.save(reservation);

  return sendResponse(res, 'Reservation updated successfully', updatedReservation, 200);
};
