const express = require('express');
const path = require('path');
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log(`${req.method} request received at ${req.url}`);
  next();
});
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/scores', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM scores');
    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.send([]);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});