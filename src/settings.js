import dotenv from 'dotenv';

dotenv.config();
export const DATABASE_URL = process.env.CONNECTION_STRING;
