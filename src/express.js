import express from 'express';
import pg from 'pg';
const port = process.env.PORT || 3000;
const app = express();

const DB_HOST = process.env.DATABASE_HOST || 'dpg-cgkt4tm4dad69r4o7270-a';

const pool = new pg.Pool({
  user: 'scores_db_user',
  host: DB_HOST,
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