CREATE TABLE cars (
  id INTEGER PRIMARY KEY,
  model TEXT NOT NULL,
  price_k INTEGER NOT NULL,
  km INTEGER NOT NULL,
  year INTEGER NOT NULL,
  fuel TEXT NOT NULL
);

INSERT INTO cars (id, model, price_k, km, year, fuel) VALUES
  (1, 'Ioniq', 19, 61179, 2017, 'diesel'),
  (2, 'Golf', 35, 33485, 2016, 'electric'),
  (3, 'Polo', 39, 109119, 2012, 'petrol'),
  (4, 'Mazda3', 47, 96709, 2019, 'diesel'),
  (5, 'Fiesta', 45, 26841, 2010, 'hybrid'),
  (6, 'Prius', 30, 167500, 2011, 'electric'),
  (7, 'Clio', 40, 179491, 2010, 'electric'),
  (8, 'Model 3', 58, 81880, 2020, 'hybrid'),
  (9, 'Leaf', 53, 35044, 2011, 'petrol');

CREATE TABLE car_events (
  id INTEGER PRIMARY KEY,
  car_id INTEGER NOT NULL REFERENCES cars(id),
  kind TEXT NOT NULL,
  amount INTEGER NOT NULL,
  day INTEGER NOT NULL
);

INSERT INTO car_events (id, car_id, kind, amount, day) VALUES
  (1, 1, 'view', 20, 6),
  (2, 1, 'share', 17, 16),
  (3, 4, 'view', 13, 15),
  (4, 4, 'view', 1, 16),
  (5, 5, 'view', 3, 28),
  (6, 6, 'like', 8, 13),
  (7, 6, 'share', 11, 11),
  (8, 6, 'share', 18, 14),
  (9, 7, 'view', 7, 7),
  (10, 7, 'share', 12, 18),
  (11, 8, 'view', 19, 1),
  (12, 9, 'view', 20, 3),
  (13, 9, 'view', 4, 19),
  (14, 9, 'like', 14, 23);
