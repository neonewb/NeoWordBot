import { Pool } from 'pg'

export const db = new Pool({
  user: 'postgres',
  password: process.env.DBPASSWORD,
  host: 'localhost',
  port: 5432,
  database: 'neowordbot'
})
