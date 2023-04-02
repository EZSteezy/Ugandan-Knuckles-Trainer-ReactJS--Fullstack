'use strict';
const express = require('express');
const { Pool } = require('pg');
const app = express();


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

const DB_HOST = process.env.DATABASE_HOST || 'dpg-cgkt4tm4dad69r4o7270-a';

const pool = new Pool({
  user: 'scores_db_user',
  host: DB_HOST,
  database: 'scores_db',
  password: 'fvlnOLMLXjtLc0clcgkgKsTXSsbFI28G',
  port: 5432,
});

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});