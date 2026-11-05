SELECT level, COUNT(*) AS total
FROM courses
GROUP BY level
ORDER BY total DESC, level;
