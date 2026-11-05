SELECT level, COUNT(*) AS total
FROM employees
GROUP BY level
HAVING COUNT(*) >= 2
ORDER BY level;
