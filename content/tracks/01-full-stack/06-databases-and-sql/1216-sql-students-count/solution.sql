SELECT course, COUNT(*) AS total
FROM students
GROUP BY course
ORDER BY total DESC, course;
