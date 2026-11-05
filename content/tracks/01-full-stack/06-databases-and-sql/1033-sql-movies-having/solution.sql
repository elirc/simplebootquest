SELECT genre, COUNT(*) AS total
FROM movies
GROUP BY genre
HAVING COUNT(*) >= 2
ORDER BY genre;
