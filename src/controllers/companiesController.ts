import { Request, Response } from 'express';

import { PaginationResponse } from '../types/response';
import { cleanKeys, sendResponse } from '../utils';
import { AppDataSource } from '../data-source';
import { UserRole } from '../types/enums';
import { User } from '../models';

const userRepository = AppDataSource.getRepository(User);

export const getCompanies = async (req: Request, res: Response): Promise<Response<PaginationResponse<User[]>>> => {
  let query = userRepository.createQueryBuilder('users')
    .where('users.role = :role', { role: UserRole.BUSINESS })
    .leftJoinAndSelect('users.avatar', 'avatar')
    .leftJoinAndSelect('users.services', 'services');

  const { city, country, text, limit, offset } = req.query;

  if (text) {
    query = query
      .where('LOWER(CONCAT(users.firstName, users.lastName)) LIKE LOWER(:searchText)', { searchText: `%${text}%` })
  }

  if (city) {
    query = query.andWhere('users.city = :city', { city });
  }

  if (country) {
    query = query.andWhere('users.country = :country', { country });
  }

  const count = await query.getCount();

  if (limit && offset) {
    query = query
      .take(parseInt(limit as string))
      .skip(parseInt(offset as string));
  }

  const companies = await query.getMany();

  return sendResponse(res, 'Companies fetched successfully', { items: cleanKeys(companies), count }, 200);
}

export const getCompany = async (req: Request, res: Response): Promise<Response<User>> => {
  const company = await userRepository.findOne({
    where: {
      id: parseInt(req.params.id),
      role: UserRole.BUSINESS
    },
    relations: ['services', 'avatar']
  });

  if (!company) {
    return sendResponse(res, 'Company not found', null, 404);
  }

  return sendResponse(res, 'Company fetched successfully', cleanKeys(company), 200);
}
