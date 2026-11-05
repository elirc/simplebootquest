SELECT kind, MIN(minutes) AS min_minutes, MAX(minutes) AS max_minutes
FROM workouts
GROUP BY kind
ORDER BY kind;
