import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from 'typeorm';

import { User, Token, Attachment, Service } from './models';
import { CreateAttachmentsTable1726353157154 } from './migrations/1726353157154-CreateAttachmentsTable';
import { CreateServicesTable1726353157605 } from './migrations/1726353157605-CreateServicesTable';
import { CreateTokensTable1726353158074 } from './migrations/1726353158074-CreateTokensTable';
import { CreateUsersTable1726353158584 } from './migrations/1726353158584-CreateUsersTable';
import { AddTimestamps1726354582975 } from './migrations/1726354582975-AddTimestamps';

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
        Service
    ],
    migrations: [
        CreateAttachmentsTable1726353157154,
        CreateServicesTable1726353157605,
        CreateTokensTable1726353158074,
        CreateUsersTable1726353158584,
        AddTimestamps1726354582975
    ],
    subscribers: [],
})
