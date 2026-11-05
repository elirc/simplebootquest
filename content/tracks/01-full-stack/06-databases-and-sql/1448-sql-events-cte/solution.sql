WITH per_group AS (
  SELECT format, AVG(registered) AS avg_value FROM events GROUP BY format
)
SELECT format
FROM per_group
WHERE avg_value > (SELECT AVG(registered) FROM events)
ORDER BY format;
