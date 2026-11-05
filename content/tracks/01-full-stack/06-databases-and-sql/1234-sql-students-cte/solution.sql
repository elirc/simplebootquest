WITH per_group AS (
  SELECT course, AVG(age) AS avg_value FROM students GROUP BY course
)
SELECT course
FROM per_group
WHERE avg_value > (SELECT AVG(age) FROM students)
ORDER BY course;
