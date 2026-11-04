SELECT genre,
  SUM(CASE WHEN pages < 300 THEN 1 ELSE 0 END) AS short,
  SUM(CASE WHEN pages >= 300 THEN 1 ELSE 0 END) AS long,
  COUNT(*) AS total
FROM books
GROUP BY genre
ORDER BY genre;
