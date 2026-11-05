CREATE TABLE flights (
  id INTEGER PRIMARY KEY,
  number TEXT NOT NULL,
  duration_min INTEGER NOT NULL,
  delay_min INTEGER NOT NULL,
  seats INTEGER NOT NULL,
  airline TEXT NOT NULL
);

INSERT INTO flights (id, number, duration_min, delay_min, seats, airline) VALUES
  (1, 'KL641', 244, 135, 15, 'skyteam'),
  (2, 'AA100', 56, 85, 12, 'oneworld'),
  (3, 'IB6251', 800, 8, 36, 'skyteam'),
  (4, 'QF1', 541, 51, 26, 'star'),
  (5, 'UA90', 699, 22, 18, 'star'),
  (6, 'LH400', 459, 51, 23, 'star'),
  (7, 'BA117', 542, 180, 4, 'skyteam'),
  (8, 'AF22', 263, 129, 33, 'oneworld'),
  (9, 'EK3', 267, 74, 44, 'skyteam');

CREATE TABLE flight_events (
  id INTEGER PRIMARY KEY,
  flight_id INTEGER NOT NULL REFERENCES flights(id),
  kind TEXT NOT NULL,
  amount INTEGER NOT NULL,
  day INTEGER NOT NULL
);

INSERT INTO flight_events (id, flight_id, kind, amount, day) VALUES
  (1, 4, 'like', 10, 17),
  (2, 4, 'share', 9, 3),
  (3, 4, 'like', 10, 18),
  (4, 5, 'share', 6, 10),
  (5, 5, 'share', 12, 7),
  (6, 5, 'like', 5, 14),
  (7, 7, 'like', 2, 13),
  (8, 7, 'view', 20, 28),
  (9, 8, 'view', 5, 10);
