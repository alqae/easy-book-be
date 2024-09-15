import 'reflect-metadata';
import 'dotenv/config';

import { DataSource } from 'typeorm';

import { CreateAttachmentsTable1726353157154 } from './migrations/1726353157154-CreateAttachmentsTable';
import { CreateServicesTable1726353157605 } from './migrations/1726353157605-CreateServicesTable';
import { CreateReservations1726362321867 } from './migrations/1726362321867-CreateReservations';
import { CreateTokensTable1726353158074 } from './migrations/1726353158074-CreateTokensTable';
import { CreateUsersTable1726353158584 } from './migrations/1726353158584-CreateUsersTable';
import { AddTimestamps1726354582975 } from './migrations/1726354582975-AddTimestamps';
import { User, Token, Attachment, Service, Reservation } from './models';

export const AppDataSource = new DataSource({
    type: 'postgres',
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    synchronize: true,
    logging: false,
    entities: [
        User,
        Token,
        Attachment,
        Service,
        Reservation
    ],
    migrations: [
        CreateAttachmentsTable1726353157154,
        CreateServicesTable1726353157605,
        CreateTokensTable1726353158074,
        CreateUsersTable1726353158584,
        AddTimestamps1726354582975,
        CreateReservations1726362321867
    ],
    subscribers: [],
})
