// database.js
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // conexão segura via variável de ambiente
  ssl: { rejectUnauthorized: false }
});

module.exports = pool;
