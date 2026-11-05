SELECT level, MIN(enrolled) AS min_enrolled, MAX(enrolled) AS max_enrolled
FROM courses
GROUP BY level
ORDER BY level;
