SELECT t.name, SUM(ev.amount) AS total
FROM employees t
JOIN employee_events ev ON ev.employee_id = t.id
GROUP BY t.id, t.name
ORDER BY total DESC, t.name;
