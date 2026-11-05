INSERT INTO employees (id, name, years_at_company, salary, level, team, remote)
VALUES (100, 'New employee', 13, 42000, 'junior', 'platform', 0);

SELECT COUNT(*) AS total FROM employees WHERE level = 'junior';
