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
const HOST = 'dpg-cgkt4tm4dad69r4o7270-a'

const pool = new Pool({
  user: 'scores_db_user',
  host: HOST,
  database: 'scores_db',
  password: 'fvlnOLMLXjtLc0clcgkgKsTXSsbFI28G',
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