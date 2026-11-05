SELECT genre, MIN(rating) AS min_rating, MAX(rating) AS max_rating
FROM movies
GROUP BY genre
ORDER BY genre;
