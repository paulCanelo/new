import dotenv from "dotenv";
dotenv.config();
import { createPool } from "mysql2/promise";
const { DB_HOST, DB_USER, DB_PASS, DB_DATABASE } = process.env;

const pool = createPool({
  host: DB_HOST || 'localhost',
  user: DB_USER || 'root',
  password: DB_PASS || '',
  database: DB_DATABASE || 'new',
});

export { pool };