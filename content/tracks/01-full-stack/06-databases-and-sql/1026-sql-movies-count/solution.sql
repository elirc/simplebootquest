SELECT genre, COUNT(*) AS total
FROM movies
GROUP BY genre
ORDER BY total DESC, genre;
