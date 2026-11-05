WITH per_group AS (
  SELECT level, AVG(enrolled) AS avg_value FROM courses GROUP BY level
)
SELECT level
FROM per_group
WHERE avg_value > (SELECT AVG(enrolled) FROM courses)
ORDER BY level;
