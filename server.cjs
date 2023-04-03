const { Pool } = require('pg');
const express = require('express');
const app = express();
const router = express.Router();
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

router.get('/scores', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM scores');
    const scores = result.rows;
    client.release();
    res.send(scores);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

app.use('/api', router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});