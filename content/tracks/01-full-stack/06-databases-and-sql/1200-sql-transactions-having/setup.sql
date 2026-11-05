CREATE TABLE transactions (
  id INTEGER PRIMARY KEY,
  reference TEXT NOT NULL,
  amount INTEGER NOT NULL,
  day INTEGER NOT NULL,
  category TEXT NOT NULL
);

INSERT INTO transactions (id, reference, amount, day, category) VALUES
  (1, 'TX-06', 950, 18, 'rent'),
  (2, 'TX-11', -18, 7, 'travel'),
  (3, 'TX-07', -234, 17, 'travel'),
  (4, 'TX-10', 942, 3, 'travel'),
  (5, 'TX-04', 648, 12, 'travel'),
  (6, 'TX-12', 715, 12, 'fun'),
  (7, 'TX-03', 460, 6, 'fun'),
  (8, 'TX-08', 570, 21, 'travel'),
  (9, 'TX-02', 999, 5, 'travel');

CREATE TABLE transaction_events (
  id INTEGER PRIMARY KEY,
  transaction_id INTEGER NOT NULL REFERENCES transactions(id),
  kind TEXT NOT NULL,
  amount INTEGER NOT NULL,
  day INTEGER NOT NULL
);

INSERT INTO transaction_events (id, transaction_id, kind, amount, day) VALUES
  (1, 2, 'share', 7, 27),
  (2, 2, 'share', 8, 16),
  (3, 2, 'share', 20, 12),
  (4, 3, 'view', 3, 6),
  (5, 5, 'like', 13, 5),
  (6, 5, 'view', 14, 6),
  (7, 6, 'like', 5, 11),
  (8, 6, 'share', 14, 15),
  (9, 7, 'view', 3, 7),
  (10, 7, 'like', 2, 6),
  (11, 7, 'share', 10, 7),
  (12, 8, 'like', 13, 9),
  (13, 8, 'view', 6, 26),
  (14, 9, 'like', 13, 17);
