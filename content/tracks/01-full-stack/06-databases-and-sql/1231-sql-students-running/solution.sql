SELECT id, age,
  SUM(age) OVER (ORDER BY id) AS running_total
FROM students
ORDER BY id;
