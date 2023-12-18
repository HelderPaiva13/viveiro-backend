

const { Pool } = require('pg');
const productsPool = new Pool({
  connectionString: process.env.DBConnLink,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = productsPool;