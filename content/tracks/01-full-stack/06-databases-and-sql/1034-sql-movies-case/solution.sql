SELECT title,
  CASE WHEN rating >= 7.9 THEN 'high' WHEN rating < 5 THEN 'low' ELSE 'medium' END AS band
FROM movies
ORDER BY title;
