// PostgreSQL database client
// Exports a connection pool for use throughout the backend

const { Pool } = require('pg');

// Create a connection pool using DATABASE_URL from environment
// SSL configuration is set for Heroku Postgres compatibility
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production'
    ? { rejectUnauthorized: false }  // Heroku requires this
    : false  // Local development without SSL
});

// Log connection errors
pool.on('error', (err) => {
  console.error('Unexpected error on idle PostgreSQL client', err);
  process.exit(-1);
});

// Test the connection on startup
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Failed to connect to PostgreSQL database:', err);
  } else {
    console.log('✓ PostgreSQL connected successfully at', res.rows[0].now);
  }
});

module.exports = pool;
