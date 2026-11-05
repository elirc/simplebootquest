WITH per_group AS (
  SELECT genre, AVG(pages) AS avg_value FROM books GROUP BY genre
)
SELECT genre
FROM per_group
WHERE avg_value > (SELECT AVG(pages) FROM books)
ORDER BY genre;
