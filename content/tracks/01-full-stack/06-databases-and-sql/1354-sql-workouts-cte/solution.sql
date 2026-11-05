WITH per_group AS (
  SELECT kind, AVG(minutes) AS avg_value FROM workouts GROUP BY kind
)
SELECT kind
FROM per_group
WHERE avg_value > (SELECT AVG(minutes) FROM workouts)
ORDER BY kind;
