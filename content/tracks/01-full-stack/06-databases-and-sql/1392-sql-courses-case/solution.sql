SELECT title,
  CASE WHEN enrolled >= 4034 THEN 'high' WHEN enrolled < 1519 THEN 'low' ELSE 'medium' END AS band
FROM courses
ORDER BY title;
