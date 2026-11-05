CREATE TABLE events (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  capacity INTEGER NOT NULL,
  registered INTEGER NOT NULL,
  format TEXT NOT NULL,
  free INTEGER NOT NULL
);

INSERT INTO events (id, name, capacity, registered, format, free) VALUES
  (1, 'Open Mic', 300, 37, 'hybrid', 1),
  (2, 'Workshop', 374, 108, 'online', 0),
  (3, 'Code Dojo', 267, 247, 'in-person', 1),
  (4, 'Startup Night', 136, 231, 'hybrid', 1),
  (5, 'Demo Day', 214, 354, 'online', 1),
  (6, 'Design Jam', 378, 138, 'hybrid', 1),
  (7, 'AI Panel', 220, 339, 'hybrid', 0),
  (8, 'Game Night', 255, 46, 'in-person', 0),
  (9, 'JS Meetup', 200, 126, 'hybrid', 0);

CREATE TABLE event_events (
  id INTEGER PRIMARY KEY,
  event_id INTEGER NOT NULL REFERENCES events(id),
  kind TEXT NOT NULL,
  amount INTEGER NOT NULL,
  day INTEGER NOT NULL
);

INSERT INTO event_events (id, event_id, kind, amount, day) VALUES
  (1, 1, 'view', 16, 20),
  (2, 1, 'view', 18, 8),
  (3, 1, 'view', 4, 11),
  (4, 2, 'view', 9, 12),
  (5, 2, 'share', 8, 11),
  (6, 4, 'share', 2, 24),
  (7, 4, 'view', 11, 7),
  (8, 5, 'share', 7, 8),
  (9, 5, 'like', 11, 16),
  (10, 7, 'like', 6, 6);
