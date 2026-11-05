SELECT title,
  CASE WHEN seconds >= 393 THEN 'high' WHEN seconds < 267 THEN 'low' ELSE 'medium' END AS band
FROM songs
ORDER BY title;
