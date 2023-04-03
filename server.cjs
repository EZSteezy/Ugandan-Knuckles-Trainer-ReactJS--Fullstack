const { Pool } = require('pg');
const express = require('express');
const app = express();
const router = express.Router();

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mydatabase',
  password: 'mysecretpassword',
  port: 5432,
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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});