SELECT title
FROM movies
WHERE rating > (SELECT AVG(rating) FROM movies)
ORDER BY title;
