SELECT level, COUNT(*) AS total
FROM courses
GROUP BY level
HAVING COUNT(*) >= 2
ORDER BY level;
