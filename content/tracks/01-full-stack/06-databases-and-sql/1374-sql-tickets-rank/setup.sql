CREATE TABLE tickets (
  id INTEGER PRIMARY KEY,
  subject TEXT NOT NULL,
  age_hours INTEGER NOT NULL,
  replies INTEGER NOT NULL,
  priority TEXT NOT NULL,
  channel TEXT NOT NULL,
  resolved INTEGER NOT NULL
);

INSERT INTO tickets (id, subject, age_hours, replies, priority, channel, resolved) VALUES
  (1, 'Slow page', 168, 2, 'urgent', 'chat', 0),
  (2, 'Email change', 89, 6, 'urgent', 'phone', 0),
  (3, 'Missing order', 143, 5, 'normal', 'phone', 1),
  (4, 'Dark mode', 2, 9, 'normal', 'phone', 1),
  (5, 'Login fails', 36, 11, 'urgent', 'phone', 1),
  (6, 'Refund request', 176, 4, 'low', 'phone', 1),
  (7, 'Feature idea', 26, 8, 'normal', 'email', 1),
  (8, 'Bug in export', 133, 5, 'urgent', 'phone', 0),
  (9, 'Password reset', 41, 3, 'low', 'phone', 1);

CREATE TABLE ticket_events (
  id INTEGER PRIMARY KEY,
  ticket_id INTEGER NOT NULL REFERENCES tickets(id),
  kind TEXT NOT NULL,
  amount INTEGER NOT NULL,
  day INTEGER NOT NULL
);

INSERT INTO ticket_events (id, ticket_id, kind, amount, day) VALUES
  (1, 1, 'view', 11, 18),
  (2, 1, 'share', 9, 16),
  (3, 2, 'share', 17, 27),
  (4, 2, 'view', 2, 8),
  (5, 2, 'view', 7, 14),
  (6, 3, 'view', 3, 8),
  (7, 3, 'share', 1, 2),
  (8, 3, 'view', 2, 13),
  (9, 5, 'like', 10, 12),
  (10, 6, 'view', 17, 1),
  (11, 6, 'view', 1, 10),
  (12, 6, 'view', 9, 21),
  (13, 7, 'like', 9, 15),
  (14, 7, 'share', 17, 6),
  (15, 8, 'view', 7, 3),
  (16, 8, 'view', 8, 22),
  (17, 8, 'view', 6, 28),
  (18, 9, 'view', 20, 2),
  (19, 9, 'share', 14, 24);
