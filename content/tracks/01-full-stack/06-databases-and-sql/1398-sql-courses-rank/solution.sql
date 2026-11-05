SELECT level, title, enrolled,
  RANK() OVER (PARTITION BY level ORDER BY enrolled DESC) AS rank
FROM courses
ORDER BY level, rank, title;
