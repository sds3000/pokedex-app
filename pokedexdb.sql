DROP TABLE IF EXISTS team;

CREATE TABLE team
(
  pokemon_id     SERIAL   PRIMARY KEY NOT NULL,
  name           TEXT       NOT NULL,
  next_evolution TEXT,
  type        SERIAL     NOT NULL,

);

DROP TABLE IF EXISTS caught;

create TABLE caught 
(
  caught_id SERIAL NOT NULL,
  
);

DROP TABLE IF EXISTS stats;

CREATE TABLE stats
(
  stat_id        SERIAL  NOT NULL,
  pokemon_id INTEGER NOT NULL,
  curr_level INTEGER NOT NULL,
  next_evolution_level INTEGER,
  attack INTEGER NOT NULL,
  speed INTEGER NOT NULL,
  defense INTEGER NOT NULL,
  special_defense INTEGER NOT NULL,
  special_attack INTEGER NOT NULL,
  total INTEGER NOT NULL
);
