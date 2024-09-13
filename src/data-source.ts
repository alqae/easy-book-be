import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { User, Token } from './models';

export const AppDataSource = new DataSource({
    type: "mongodb",
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 27017,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    synchronize: true,
    logging: false,
    entities: [User, Token],
    migrations: [],
    subscribers: [],
})
