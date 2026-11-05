SELECT course, MIN(age) AS min_age, MAX(age) AS max_age
FROM students
GROUP BY course
ORDER BY course;
