SELECT kind, COUNT(*) AS total
FROM workouts
GROUP BY kind
ORDER BY total DESC, kind;
