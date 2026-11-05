SELECT title,
  CASE WHEN estimate >= 11 THEN 'high' WHEN estimate < 3 THEN 'low' ELSE 'medium' END AS band
FROM tasks
ORDER BY title;
