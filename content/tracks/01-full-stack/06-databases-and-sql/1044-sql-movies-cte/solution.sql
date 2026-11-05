WITH per_group AS (
  SELECT genre, AVG(rating) AS avg_value FROM movies GROUP BY genre
)
SELECT genre
FROM per_group
WHERE avg_value > (SELECT AVG(rating) FROM movies)
ORDER BY genre;
