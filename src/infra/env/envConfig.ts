import * as dotenv from 'dotenv';
dotenv.config();

export const envConfig = {
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expires_in: process.env.JWT_EXPIRES_IN,
  },
  coreApi: {
    url: process.env.CORE_API_URL,
  },
  asaas: {
    apiUrl: process.env.ASAAS_API_URL,
    apiKey: process.env.ASAAS_API_KEY,
  },
};
