declare namespace NodeJS {
  interface ProcessEnv {
    // Server
    PORT?: string;
    // Database
    DB_NAME: string;
    DB_PORT: string;
    DB_HOST: string;
    DB_USER: string;
    DB_PASSWORD: string;
    // JWT
    JWT_SECRET: string;
    REFRESH_TOKEN_SECRET: string;
    // SMTP
    SMTP_HOST: string;
    SMTP_PORT: string;
    SMTP_USER: string;
    SMTP_PASSWORD: string;
    SMTP_FROM: string;
    // Environment
    NODE_ENV?: 'development' | 'production';
  }
}
