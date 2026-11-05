WITH per_group AS (
  SELECT airline, AVG(duration_min) AS avg_value FROM flights GROUP BY airline
)
SELECT airline
FROM per_group
WHERE avg_value > (SELECT AVG(duration_min) FROM flights)
ORDER BY airline;
