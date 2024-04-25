import pg from 'pg';
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USER
} from '../server/config.js'

const pool = new pg.Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT
});

pool.query('SELECT NOW()').then((res) => {
  console.log('Base de datos conectada ' + res.rows[0].now);
})

export  { pool };