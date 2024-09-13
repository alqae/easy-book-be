declare namespace NodeJS {
  interface ProcessEnv {
    PORT?: string;
    DB_HOST: string;
    DB_USER: string;
    DB_PASSWORD: string;
    JWT_SECRET: string;
    NODE_ENV?: 'development' | 'production';
  }
}
