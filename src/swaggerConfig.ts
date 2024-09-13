import swaggerJsdoc from 'swagger-jsdoc';

const PORT = process.env.PORT || 3000;

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Mi API',
    version: '1.0.0',
    description: 'Documentación de mi API usando Swagger'
  },
  servers: [
    {
      url: `http://localhost:${PORT}`,
      description: 'Servidor local',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts'], // Ruta donde están tus archivos con anotaciones
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
