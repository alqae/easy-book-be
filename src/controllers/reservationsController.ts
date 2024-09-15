import { Request, Response } from 'express';

import { ReservationStatus, UserRole } from '../types/enums';
import { Reservation, Service, User } from '../models';
import { RequestWithUser } from '../types/express';
import { AppDataSource } from '../data-source';
import { cleanKeys, sendResponse } from '../utils';

const reservationRepository = AppDataSource.getRepository(Reservation);
const serviceRepository = AppDataSource.getRepository(Service);
const userRepository = AppDataSource.getRepository(User);

export const getReservations = async (req: Request, res: Response): Promise<Response<Reservation[]>> => {
  const reservations = await reservationRepository.find({ where: { customer: { id: req.user.id } } });
  return sendResponse(res, 'Reservations fetched successfully', reservations, 200);
};

export const createReservation = async (req: RequestWithUser, res: Response): Promise<Response<Reservation>> => {
  const { startDate, endDate, serviceId } = req.body;

  const business = await userRepository.findOne({ where: { id: req.user.id, role: UserRole.BUSINESS } });
  const service = await serviceRepository.findOne({ where: { id: serviceId } });

  const reservation = new Reservation();
  reservation.startDate = startDate;
  reservation.endDate = endDate;
  reservation.service = service;
  reservation.customer = req.user;
  reservation.business = business;
  reservation.status = ReservationStatus.PENDING;

  const savedReservation = await reservationRepository.save(reservation);

  return sendResponse(res, 'Reservation created successfully', savedReservation, 201);  
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
