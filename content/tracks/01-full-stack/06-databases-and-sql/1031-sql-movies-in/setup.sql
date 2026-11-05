CREATE TABLE movies (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  year INTEGER NOT NULL,
  minutes INTEGER NOT NULL,
  rating REAL NOT NULL,
  genre TEXT NOT NULL
);

INSERT INTO movies (id, title, year, minutes, rating, genre) VALUES
  (1, 'Paper Moon', 1983, 157, 7.9, 'thriller'),
  (2, 'Night Train', 1996, 168, 5, 'thriller'),
  (3, 'Quiet Storm', 1994, 115, 7.5, 'thriller'),
  (4, 'Last Light', 2023, 103, 7.9, 'sci-fi'),
  (5, 'Open Road', 1988, 168, 8.3, 'thriller'),
  (6, 'Silver Fox', 1999, 86, 4.5, 'thriller'),
  (7, 'Blue River', 1983, 153, 4.9, 'sci-fi'),
  (8, 'Cloud Atlas', 1991, 86, 7.3, 'sci-fi'),
  (9, 'Red Harbor', 2018, 153, 6.8, 'thriller');

CREATE TABLE movie_events (
  id INTEGER PRIMARY KEY,
  movie_id INTEGER NOT NULL REFERENCES movies(id),
  kind TEXT NOT NULL,
  amount INTEGER NOT NULL,
  day INTEGER NOT NULL
);

INSERT INTO movie_events (id, movie_id, kind, amount, day) VALUES
  (1, 1, 'share', 4, 26),
  (2, 1, 'like', 8, 26),
  (3, 1, 'share', 7, 28),
  (4, 2, 'share', 2, 18),
  (5, 2, 'view', 10, 4),
  (6, 3, 'like', 9, 10),
  (7, 3, 'like', 1, 13),
  (8, 3, 'view', 10, 4),
  (9, 4, 'share', 3, 12),
  (10, 6, 'like', 4, 5),
  (11, 6, 'like', 9, 28),
  (12, 8, 'view', 15, 9),
  (13, 8, 'like', 12, 22),
  (14, 8, 'like', 14, 6),
  (15, 9, 'like', 7, 15),
  (16, 9, 'share', 15, 24);
