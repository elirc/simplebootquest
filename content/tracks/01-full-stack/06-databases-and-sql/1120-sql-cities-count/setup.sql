CREATE TABLE cities (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  population INTEGER NOT NULL,
  avg_temp INTEGER NOT NULL,
  continent TEXT NOT NULL
);

INSERT INTO cities (id, name, population, avg_temp, continent) VALUES
  (1, 'Lagos', 755, 11, 'Asia'),
  (2, 'Seoul', 2308, 14, 'Asia'),
  (3, 'Perth', 6712, 11, 'Europe'),
  (4, 'Oslo', 9244, 25, 'Oceania'),
  (5, 'Lima', 8203, 20, 'Europe'),
  (6, 'Lisbon', 9395, 2, 'Asia'),
  (7, 'Austin', 3567, 15, 'Oceania'),
  (8, 'Turin', 7148, 2, 'Americas'),
  (9, 'Cairo', 4887, 23, 'Europe');

CREATE TABLE city_events (
  id INTEGER PRIMARY KEY,
  city_id INTEGER NOT NULL REFERENCES cities(id),
  kind TEXT NOT NULL,
  amount INTEGER NOT NULL,
  day INTEGER NOT NULL
);

INSERT INTO city_events (id, city_id, kind, amount, day) VALUES
  (1, 1, 'like', 1, 5),
  (2, 1, 'like', 6, 24),
  (3, 3, 'like', 4, 27),
  (4, 3, 'like', 12, 9),
  (5, 4, 'share', 16, 12),
  (6, 5, 'view', 17, 19),
  (7, 5, 'like', 5, 17),
  (8, 7, 'share', 3, 27),
  (9, 7, 'like', 2, 10),
  (10, 7, 'like', 3, 9),
  (11, 8, 'view', 19, 16),
  (12, 9, 'view', 4, 22),
  (13, 9, 'view', 13, 13);
