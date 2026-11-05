SELECT id, enrolled,
  SUM(enrolled) OVER (ORDER BY id) AS running_total
FROM courses
ORDER BY id;
