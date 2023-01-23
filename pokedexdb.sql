DROP TABLE IF EXISTS team;

CREATE TABLE team
(
  pokemon_id     SERIAL   PRIMARY KEY NOT NULL,
  lvl INTEGER,
  name           TEXT       NOT NULL,
  next_evolution TEXT,
  type        SERIAL     NOT NULL,

);

-- DROP TABLE IF EXISTS caught;

-- create TABLE caught 
-- (
--   caught_id SERIAL NOT NULL,
  
-- );

DROP TABLE IF EXISTS stats;

CREATE TABLE stats
(
  stat_id        SERIAL  NOT NULL,
  pokemon_id INTEGER NOT NULL,
  curr_level INTEGER NOT NULL,
  next_evolution_level INTEGER,
  hp INTEGER,
  attack INTEGER,
  speed INTEGER,
  defense INTEGER,
  special_defense INTEGER,
  special_attack INTEGER,
  total INTEGER
);
