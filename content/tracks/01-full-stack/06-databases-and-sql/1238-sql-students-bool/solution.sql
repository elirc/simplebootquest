SELECT course, SUM(CASE WHEN graduated = 1 THEN 1 ELSE 0 END) AS total
FROM students
GROUP BY course
ORDER BY course;
