import dotenv from 'dotenv';

dotenv.config();
export const CONNECTION_URL = process.env.DATABASE_URL;
