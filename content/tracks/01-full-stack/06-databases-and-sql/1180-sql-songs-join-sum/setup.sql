CREATE TABLE songs (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  seconds INTEGER NOT NULL,
  plays INTEGER NOT NULL,
  artist TEXT NOT NULL,
  mood TEXT NOT NULL
);

INSERT INTO songs (id, title, seconds, plays, artist, mood) VALUES
  (1, 'Lanterns', 393, 9392, 'Nova', 'dark'),
  (2, 'Static', 204, 6979, 'The Pines', 'dark'),
  (3, 'Sunrise', 334, 7845, 'Nova', 'dark'),
  (4, 'Echoes', 351, 3615, 'The Pines', 'calm'),
  (5, 'Riverside', 414, 5590, 'The Pines', 'happy'),
  (6, 'Drift', 393, 3314, 'The Pines', 'dark'),
  (7, 'Velvet', 267, 5918, 'Nova', 'dark'),
  (8, 'Tides', 258, 3760, 'Kairo', 'dark'),
  (9, 'Halo', 369, 6255, 'The Pines', 'happy');

CREATE TABLE song_events (
  id INTEGER PRIMARY KEY,
  song_id INTEGER NOT NULL REFERENCES songs(id),
  kind TEXT NOT NULL,
  amount INTEGER NOT NULL,
  day INTEGER NOT NULL
);

INSERT INTO song_events (id, song_id, kind, amount, day) VALUES
  (1, 1, 'share', 13, 9),
  (2, 1, 'like', 15, 8),
  (3, 1, 'share', 20, 13),
  (4, 2, 'view', 5, 27),
  (5, 2, 'share', 1, 25),
  (6, 3, 'share', 15, 13),
  (7, 3, 'share', 6, 19),
  (8, 4, 'view', 16, 17),
  (9, 4, 'like', 16, 14),
  (10, 4, 'share', 1, 22),
  (11, 5, 'share', 1, 23),
  (12, 5, 'like', 16, 3),
  (13, 7, 'share', 1, 3),
  (14, 7, 'view', 15, 1),
  (15, 9, 'like', 11, 2),
  (16, 9, 'share', 10, 21);
