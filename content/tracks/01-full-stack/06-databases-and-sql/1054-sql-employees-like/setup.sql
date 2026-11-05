CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  salary INTEGER NOT NULL,
  years_at_company INTEGER NOT NULL,
  team TEXT NOT NULL,
  level TEXT NOT NULL,
  remote INTEGER NOT NULL
);

INSERT INTO employees (id, name, salary, years_at_company, team, level, remote) VALUES
  (1, 'Frances', 116036, 12, 'product', 'junior', 1),
  (2, 'Katherine', 52419, 7, 'platform', 'senior', 0),
  (3, 'Barbara', 69629, 7, 'product', 'senior', 1),
  (4, 'Radia', 111323, 14, 'product', 'junior', 1),
  (5, 'Ken', 63192, 13, 'platform', 'junior', 0),
  (6, 'Tim', 140048, 10, 'product', 'senior', 0),
  (7, 'Ada', 115298, 13, 'product', 'senior', 0),
  (8, 'Dennis', 44656, 14, 'platform', 'mid', 1),
  (9, 'Margaret', 145973, 13, 'product', 'senior', 1);

CREATE TABLE employee_events (
  id INTEGER PRIMARY KEY,
  employee_id INTEGER NOT NULL REFERENCES employees(id),
  kind TEXT NOT NULL,
  amount INTEGER NOT NULL,
  day INTEGER NOT NULL
);

INSERT INTO employee_events (id, employee_id, kind, amount, day) VALUES
  (1, 2, 'view', 14, 14),
  (2, 2, 'view', 14, 28),
  (3, 3, 'like', 5, 12),
  (4, 4, 'like', 17, 9),
  (5, 4, 'like', 4, 25),
  (6, 6, 'share', 19, 24),
  (7, 6, 'view', 14, 6),
  (8, 7, 'like', 18, 18),
  (9, 7, 'like', 16, 13),
  (10, 8, 'share', 8, 1),
  (11, 8, 'share', 10, 24),
  (12, 8, 'view', 19, 22),
  (13, 9, 'view', 3, 2);
