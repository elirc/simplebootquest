SELECT level, SUM(CASE WHEN remote = 1 THEN 1 ELSE 0 END) AS total
FROM employees
GROUP BY level
ORDER BY level;
