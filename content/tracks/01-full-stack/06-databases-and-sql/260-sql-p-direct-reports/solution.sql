SELECT m.name, COUNT(e.id) AS reports
FROM employees m
JOIN employees e ON e.manager_id = m.id
GROUP BY m.id, m.name
ORDER BY reports DESC, m.name;
