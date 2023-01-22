DROP TABLE IF EXISTS pokemon;

CREATE TABLE team
(
  pokemon_id     SERIAL   PRIMARY KEY NOT NULL,
  name           TEXT       NOT NULL,
  next_evolution TEXT      ,
  type_id        SERIAL     NOT NULL,
);

DROP TABLE IF EXISTS type;

CREATE TABLE type
(
  type_id SERIAL NOT NULL,
  name    TEXT   NOT NULL,
  PRIMARY KEY (type_id)
);

DROP TABLE IF EXISTS image;

CREATE TABLE image
(
  image_id   SERIAL  NOT NULL,
  image      BOOLEAN,
  pokemon_id INTEGER NOT NULL
);

DROP TABLE IF EXISTS moves;

CREATE TABLE moves
(
  moves_id   SERIAL  NOT NULL,
  name       TEXT    NOT NULL,
  atk        INTEGER,
  pp         INTEGER,
  pokemon_id INTEGER NOT NULL,
  type_id    SERIAL  NOT NULL
);

DROP TABLE IF EXISTS stats;

CREATE TABLE stats
(
  stats_id   SERIAL  NOT NULL,
  weight     INTEGER,
  type_id    INTEGER,
  egg_steps  INTEGER,
  type_id    SERIAL  NOT NULL,
  pokemon_id INTEGER NOT NULL
);


ALTER TABLE image
  ADD CONSTRAINT FK_pokemon_TO_image
    FOREIGN KEY (pokemon_id)
    REFERENCES pokemon (pokemon_id);

ALTER TABLE moves
  ADD CONSTRAINT FK_pokemon_TO_moves
    FOREIGN KEY (pokemon_id)
    REFERENCES pokemon (pokemon_id);

ALTER TABLE stats
  ADD CONSTRAINT FK_type_TO_stats
    FOREIGN KEY (type_id)
    REFERENCES type (type_id);

ALTER TABLE moves
  ADD CONSTRAINT FK_type_TO_moves
    FOREIGN KEY (type_id)
    REFERENCES type (type_id);

ALTER TABLE stats
  ADD CONSTRAINT FK_pokemon_TO_stats
    FOREIGN KEY (pokemon_id)
    REFERENCES pokemon (pokemon_id);

ALTER TABLE pokemon
  ADD CONSTRAINT FK_type_TO_pokemon
    FOREIGN KEY (type_id)
    REFERENCES type (type_id);
