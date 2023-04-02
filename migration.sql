CREATE TABLE scores (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  score INT NOT NULL
);

INSERT INTO scores (username, score) VALUES
  ('knuckles', 100);
