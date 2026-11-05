SELECT level, ROUND(AVG(enrolled), 1) AS avg_enrolled
FROM courses
GROUP BY level
ORDER BY level;
