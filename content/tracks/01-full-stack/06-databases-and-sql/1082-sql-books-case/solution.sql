SELECT title,
  CASE WHEN pages >= 576 THEN 'high' WHEN pages < 184 THEN 'low' ELSE 'medium' END AS band
FROM books
ORDER BY title;
