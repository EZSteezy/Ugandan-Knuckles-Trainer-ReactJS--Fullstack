'use strict';
const dotenv = require('dotenv');
dotenv.config();
const { Pool } = require('pg');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
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
  password: 'fAXGDT7MNFG56GeeSEIRVBpKLz3Vnd6z',
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

app.get('/api/scores/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);
  if (!Number.isInteger(id)) {
    res.status(404).send("No score found with that ID");
  }
  console.log("score ID: ", id);
  pool.query('SELECT * FROM scores WHERE id = $1', [id], (err, result) => {
    if (err) {
      return next(err);
    }
    const score = result.rows[0];
    console.log("Single score ID", id, "values:", score);
    if (score) {
      return res.send(score);
    } else {
      return res.status(404).send("No score found with that ID");
    }
  });
});

app.post('/api/scores', (req, res, next) => {
  const { score } = req.body;
  console.log(req);
  console.log("Request body", score);
  if (score) {
    pool.query('INSERT INTO scores (score) VALUES ($1) RETURNING *', [score], (err, data) => {
      const newScore = data.rows[0];
      console.log("Created newScore: ", newScore);
      if (newScore) {
        return res.send(newScore);
      } else {
        return next(err);
      }
    });
  } else {
    return res.status(400).send("Unable to create score from request body");
  }
});

app.get('/api/boom', (_req, _res, next) => {
  next(new Error('BOOM!'));
});
app.get('/api/test', (req, res) => {
  res.send("Hello World!");
});
app.use((_req, res) => {
  res.sendStatus(404);
});
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.sendStatus(500);
});
app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;