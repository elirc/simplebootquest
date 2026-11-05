CREATE TABLE repos (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  stars INTEGER NOT NULL,
  open_issues INTEGER NOT NULL,
  language TEXT NOT NULL,
  archived INTEGER NOT NULL
);

INSERT INTO repos (id, name, stars, open_issues, language, archived) VALUES
  (1, 'api-gateway', 1113, 135, 'TypeScript', 0),
  (2, 'design-system', 4262, 31, 'Go', 1),
  (3, 'billing', 1173, 87, 'TypeScript', 1),
  (4, 'cli', 2822, 124, 'Python', 1),
  (5, 'docs', 3603, 100, 'TypeScript', 1),
  (6, 'notifier', 201, 60, 'Python', 1),
  (7, 'web-app', 2468, 121, 'Go', 0),
  (8, 'infra', 1406, 67, 'Python', 1),
  (9, 'search', 5164, 67, 'Go', 0);

CREATE TABLE repo_events (
  id INTEGER PRIMARY KEY,
  repo_id INTEGER NOT NULL REFERENCES repos(id),
  kind TEXT NOT NULL,
  amount INTEGER NOT NULL,
  day INTEGER NOT NULL
);

INSERT INTO repo_events (id, repo_id, kind, amount, day) VALUES
  (1, 1, 'view', 4, 22),
  (2, 1, 'view', 1, 10),
  (3, 1, 'view', 17, 23),
  (4, 2, 'like', 10, 5),
  (5, 2, 'view', 2, 7),
  (6, 2, 'view', 12, 6),
  (7, 3, 'like', 12, 6),
  (8, 3, 'like', 7, 21),
  (9, 3, 'like', 18, 19),
  (10, 4, 'view', 5, 12),
  (11, 4, 'like', 8, 1),
  (12, 5, 'share', 12, 1),
  (13, 5, 'like', 6, 20),
  (14, 5, 'like', 7, 20),
  (15, 6, 'view', 13, 10),
  (16, 6, 'like', 1, 8),
  (17, 6, 'like', 9, 4),
  (18, 8, 'like', 7, 24),
  (19, 8, 'share', 14, 3),
  (20, 9, 'share', 20, 3),
  (21, 9, 'view', 10, 13);
