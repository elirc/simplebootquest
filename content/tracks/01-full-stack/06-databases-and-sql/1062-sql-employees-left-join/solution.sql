SELECT t.name, COUNT(ev.id) AS events
FROM employees t
LEFT JOIN employee_events ev ON ev.employee_id = t.id
GROUP BY t.id, t.name
ORDER BY events DESC, t.name;
