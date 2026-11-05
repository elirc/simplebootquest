SELECT genre, title, rating,
  RANK() OVER (PARTITION BY genre ORDER BY rating DESC) AS rank
FROM movies
ORDER BY genre, rank, title;
