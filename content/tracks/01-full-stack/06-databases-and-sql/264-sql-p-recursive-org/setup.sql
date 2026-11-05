CREATE TABLE employees (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  department TEXT NOT NULL,
  manager_id INTEGER REFERENCES employees(id),
  salary INTEGER NOT NULL
);

INSERT INTO employees (id, name, title, department, manager_id, salary) VALUES
  (1, 'Rosa', 'CEO', 'exec', NULL, 250000),
  (2, 'Dev', 'VP Engineering', 'engineering', 1, 190000),
  (3, 'Mei', 'VP Sales', 'sales', 1, 180000),
  (4, 'Sam', 'Engineering Manager', 'engineering', 2, 160000),
  (5, 'Ola', 'Senior Engineer', 'engineering', 4, 150000),
  (6, 'Tom', 'Engineer', 'engineering', 4, 120000),
  (7, 'Ana', 'Engineer', 'engineering', 4, 120000),
  (8, 'Raj', 'Account Executive', 'sales', 3, 110000),
  (9, 'Lee', 'Account Executive', 'sales', 3, 95000),
  (10, 'Kim', 'Staff Engineer', 'engineering', 2, 175000);
