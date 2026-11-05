SELECT course, name, age,
  RANK() OVER (PARTITION BY course ORDER BY age DESC) AS rank
FROM students
ORDER BY course, rank, name;
