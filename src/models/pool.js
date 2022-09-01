import { Pool } from 'pg';
import dotenv from 'dotenv';
// import { DATABASE_URL } from '../settings';

dotenv.config();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// export const pool = (() => {
//     if (process.env.NODE_ENV !== 'production') {
//         return new Pool({
//             connectionString: process.env.DATABASE_URL,
//             ssl: false
//         });
//     } else {
//         return new Pool({
//             connectionString: `${process.env.DATABASE_URL}?sslmode=no-verify`,
//             ssl: {
//                 rejectUnauthorized: false
//               }
//         });
//     } })();
