SELECT level, COUNT(*) AS total
FROM employees
GROUP BY level
ORDER BY total DESC, level;
