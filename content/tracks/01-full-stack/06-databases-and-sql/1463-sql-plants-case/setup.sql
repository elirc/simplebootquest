CREATE TABLE plants (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  water_every_days INTEGER NOT NULL,
  height_cm INTEGER NOT NULL,
  light TEXT NOT NULL,
  pet_safe INTEGER NOT NULL
);

INSERT INTO plants (id, name, water_every_days, height_cm, light, pet_safe) VALUES
  (1, 'Mint', 6, 59, 'low', 1),
  (2, 'Lavender', 18, 15, 'bright', 1),
  (3, 'Fern', 7, 130, 'medium', 1),
  (4, 'Basil', 19, 11, 'low', 1),
  (5, 'Ivy', 11, 151, 'low', 0),
  (6, 'Snake Plant', 9, 58, 'medium', 0),
  (7, 'Peace Lily', 15, 20, 'low', 1),
  (8, 'Aloe', 4, 36, 'bright', 0),
  (9, 'Cactus', 5, 74, 'bright', 1);

CREATE TABLE plant_events (
  id INTEGER PRIMARY KEY,
  plant_id INTEGER NOT NULL REFERENCES plants(id),
  kind TEXT NOT NULL,
  amount INTEGER NOT NULL,
  day INTEGER NOT NULL
);

INSERT INTO plant_events (id, plant_id, kind, amount, day) VALUES
  (1, 2, 'view', 12, 12),
  (2, 2, 'view', 13, 24),
  (3, 2, 'share', 6, 5),
  (4, 4, 'view', 11, 8),
  (5, 4, 'view', 11, 25),
  (6, 4, 'like', 7, 24),
  (7, 5, 'view', 17, 26),
  (8, 5, 'like', 14, 26),
  (9, 5, 'like', 11, 8),
  (10, 6, 'view', 10, 2),
  (11, 6, 'like', 8, 12),
  (12, 6, 'view', 4, 19),
  (13, 7, 'share', 14, 1),
  (14, 7, 'like', 16, 3),
  (15, 7, 'like', 9, 25),
  (16, 8, 'view', 8, 26),
  (17, 8, 'share', 9, 7);
