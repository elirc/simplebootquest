SELECT id, rating,
  SUM(rating) OVER (ORDER BY id) AS running_total
FROM movies
ORDER BY id;
