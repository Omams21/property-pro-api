import { Pool } from 'pg';
import dotenv from 'dotenv';
import { DATABASE_URL } from '../settings';

dotenv.config();

export const pool = new Pool({ DATABASE_URL });
