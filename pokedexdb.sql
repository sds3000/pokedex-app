DROP TABLE IF EXISTS team;

CREATE TABLE team
(
  pokemon_id SERIAL PRIMARY KEY NOT NULL,
  lvl INTEGER,
  name TEXT NOT NULL,
  move1 TEXT,
  move2 TEXT,
  move3 TEXT,
  move4 TEXT
);




