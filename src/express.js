const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = process.env.PORT || 3001;


app.use(express.static('public'));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

const pool = new Pool({
  user: 'scores_db_user',
  host: process.env.DATABASE_HOST || 'dpg-cgkt4tm4dad69r4o7270-a',
  database: 'scores_db',
  password: 'fvlnOLMLXjtLc0clcgkgKsTXSsbFI28G',
  port: 5432,
});

// GET route to handle request for scores
app.get('/api/scores', (req, res, next) => {
  pool.query('SELECT * FROM scores', (err, result) => {
    if (err) {
      return next(err);
    }
    const rows = result.rows;
    console.log(rows);
    return res.send(rows);
  });
});

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});