SELECT course, ROUND(AVG(age), 1) AS avg_age
FROM students
GROUP BY course
ORDER BY course;
