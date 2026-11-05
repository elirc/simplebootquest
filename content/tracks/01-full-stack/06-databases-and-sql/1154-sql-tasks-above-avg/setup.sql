CREATE TABLE tasks (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  estimate INTEGER NOT NULL,
  priority INTEGER NOT NULL,
  status TEXT NOT NULL,
  assignee TEXT NOT NULL,
  blocked INTEGER NOT NULL
);

INSERT INTO tasks (id, title, estimate, priority, status, assignee, blocked) VALUES
  (1, 'Add search', 10, 2, 'todo', 'linus', 0),
  (2, 'Deploy API', 9, 3, 'done', 'linus', 0),
  (3, 'Refactor auth', 12, 3, 'done', 'linus', 0),
  (4, 'Write docs', 11, 2, 'done', 'linus', 0),
  (5, 'Review PR', 3, 3, 'todo', 'grace', 1),
  (6, 'Plan sprint', 1, 2, 'doing', 'ada', 0),
  (7, 'Fix login', 14, 2, 'done', 'grace', 0),
  (8, 'Add caching', 5, 4, 'todo', 'grace', 0),
  (9, 'Write tests', 3, 5, 'done', 'grace', 0);

CREATE TABLE task_events (
  id INTEGER PRIMARY KEY,
  task_id INTEGER NOT NULL REFERENCES tasks(id),
  kind TEXT NOT NULL,
  amount INTEGER NOT NULL,
  day INTEGER NOT NULL
);

INSERT INTO task_events (id, task_id, kind, amount, day) VALUES
  (1, 2, 'share', 3, 23),
  (2, 2, 'view', 18, 12),
  (3, 3, 'like', 1, 12),
  (4, 3, 'like', 18, 8),
  (5, 4, 'like', 15, 27),
  (6, 4, 'share', 10, 18),
  (7, 7, 'view', 16, 23),
  (8, 7, 'like', 9, 1),
  (9, 7, 'like', 2, 12),
  (10, 8, 'share', 1, 15),
  (11, 8, 'view', 10, 8),
  (12, 9, 'like', 11, 6),
  (13, 9, 'view', 11, 23),
  (14, 9, 'like', 15, 27);
