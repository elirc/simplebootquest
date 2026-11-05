SELECT kind, ROUND(AVG(minutes), 1) AS avg_minutes
FROM workouts
GROUP BY kind
ORDER BY kind;
