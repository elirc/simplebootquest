SELECT name
FROM employees t
WHERE NOT EXISTS (SELECT 1 FROM employee_events ev WHERE ev.employee_id = t.id)
ORDER BY name;
