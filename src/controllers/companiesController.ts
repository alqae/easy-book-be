import { Request, Response } from 'express';
import { FilterOperators } from 'typeorm';

import { AppDataSource } from '../data-source';
import { UserRole } from '../types/enums';
import { sendResponse } from '../utils';
import { User } from '../models';

const userRepository = AppDataSource.getRepository(User);

export const getCompanies = async (req: Request, res: Response): Promise<Response<User[]>> => {
  let query = userRepository.createQueryBuilder('users')
    .where('users.role = :role', { role: UserRole.BUSINESS })
    .leftJoinAndSelect('users.services', 'services');

  if (req.query.text) {
    query = query
      .where('LOWER(CONCAT(users.firstName, users.lastName)) LIKE LOWER(:searchText)', { searchText: `%${req.query.text}%` })
  }

  if (req.query.city) {
    query = query.andWhere('users.city = :city', { city: req.query.city });
  }

  if (req.query.country) {
    query = query.andWhere('users.country = :country', { country: req.query.country });
  }

  // TODO: implement pagination
  // TODO: implement caching

  const companies = await query.getMany();

  return sendResponse(res, 'Companies fetched successfully', companies, 200);
}

export const getCompany = async (req: Request, res: Response): Promise<Response<User>> => {
  const company = await userRepository.findOne({
    where: {
      id: parseInt(req.params.id),
      role: UserRole.BUSINESS
    }
  });

  if (!company) {
    return sendResponse(res, 'Company not found', null, 404);
  }

  delete company.password;
  return sendResponse(res, 'Company fetched successfully', company, 200);
}
