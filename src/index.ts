import 'dotenv/config';

import fs from 'fs';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import swaggerUi from 'swagger-ui-express';

import reservationsRoutes from './routes/reservationsRoutes';
import companiesRoutes from './routes/companiesRoutes';
import servicesRoutes from './routes/servicesRoutes';
import customerRoutes from './routes/customerRoutes';
import profileRoutes from './routes/profileRoutes';
import sharedRoutes from './routes/sharedRoutes';
import authRoutes from './routes/authRoutes';

import { errorMiddleware } from './middlewares';
import { AppDataSource } from './data-source';

(async () => {
  const app = express();

  // Middlewares
  app.use(morgan('combined')); // To log requests
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser()); // To parse cookies
  app.use(cors({ // To allow CORS
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Refresh-Token'],
  }));
  app.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" }
  }));
  app.use(compression());
  app.use(rateLimit({ // To prevent DDOS attacks
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    message: 'Too many requests from this IP, please try again later.'
  }));
  app.use(errorMiddleware); // To handle errors

  // Static files
  app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

  // Configuring TypeORM
  await AppDataSource.initialize();

  const PORT = process.env.PORT || 3000;

  // Routes
  app.use('/auth', authRoutes);
  app.use('/profile', profileRoutes);
  app.use('/reservations', reservationsRoutes);
  app.use('/shared', sharedRoutes);
  app.use('/services', servicesRoutes);
  app.use('/companies', companiesRoutes);
  app.use('/customers', customerRoutes);

  // Swagger - Documentation
  const swaggerDocumentPath = path.join(__dirname, '..', 'swagger.json');
  const swaggerDocument = JSON.parse(fs.readFileSync(swaggerDocumentPath, 'utf8'));
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  // Health checks
  app.get('/', (_, res) => res.send('🚀 The server is running smoothly! 🌟'));
  app.get('/health', (_, res) => res.send({ database: AppDataSource.isInitialized }));

  app.listen(PORT, () => console.log(`🚀🎉 The server is up and running on port ${PORT}! 🎉🚀`));
})();
