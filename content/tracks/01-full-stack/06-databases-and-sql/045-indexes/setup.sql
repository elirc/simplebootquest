CREATE TABLE events (id INTEGER PRIMARY KEY, user_id INTEGER NOT NULL, type TEXT NOT NULL, created_at TEXT NOT NULL);
INSERT INTO events (user_id, type, created_at) VALUES (42, 'view', '2026-03-01'), (42, 'purchase', '2026-03-02'), (7, 'view', '2026-03-01');
