CREATE TABLE hotels (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  nightly_price INTEGER NOT NULL,
  stars INTEGER NOT NULL,
  city TEXT NOT NULL,
  breakfast INTEGER NOT NULL
);

INSERT INTO hotels (id, name, nightly_price, stars, city, breakfast) VALUES
  (1, 'Sea Breeze', 258, 3, 'Kyoto', 0),
  (2, 'Pine Lodge', 54, 4, 'Lisbon', 1),
  (3, 'Harbour View', 263, 1, 'Kyoto', 0),
  (4, 'Maple House', 275, 2, 'Kyoto', 0),
  (5, 'Sky Garden', 418, 5, 'Lisbon', 1),
  (6, 'The Grand', 387, 2, 'Kyoto', 1),
  (7, 'Olive Court', 345, 4, 'Lisbon', 0),
  (8, 'Riverside Inn', 384, 5, 'Lisbon', 1),
  (9, 'Old Mill', 97, 3, 'Lisbon', 1);

CREATE TABLE hotel_events (
  id INTEGER PRIMARY KEY,
  hotel_id INTEGER NOT NULL REFERENCES hotels(id),
  kind TEXT NOT NULL,
  amount INTEGER NOT NULL,
  day INTEGER NOT NULL
);

INSERT INTO hotel_events (id, hotel_id, kind, amount, day) VALUES
  (1, 1, 'share', 16, 2),
  (2, 1, 'share', 12, 27),
  (3, 1, 'like', 13, 7),
  (4, 2, 'view', 4, 14),
  (5, 2, 'share', 4, 21),
  (6, 2, 'share', 3, 28),
  (7, 3, 'view', 1, 16),
  (8, 3, 'share', 9, 17),
  (9, 4, 'view', 8, 9),
  (10, 4, 'view', 8, 5),
  (11, 6, 'like', 7, 17),
  (12, 6, 'share', 13, 6),
  (13, 6, 'share', 7, 26),
  (14, 7, 'view', 17, 4),
  (15, 8, 'view', 3, 8),
  (16, 9, 'share', 11, 11),
  (17, 9, 'share', 6, 2),
  (18, 9, 'share', 13, 7);
