// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require("dotenv")
import { readFileSync } from 'fs';

dotenv.config();

export const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: true,
        ca: readFileSync('./ca.pem').toString(),
    },
};
