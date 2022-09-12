const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: "psql",
  port: process.env.POSTGRES_PORT | 5432,
  database: process.env.POSTGRES_DB,
});

module.exports = pool;
