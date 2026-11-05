SELECT course, COUNT(*) AS total
FROM students
GROUP BY course
HAVING COUNT(*) >= 2
ORDER BY course;
