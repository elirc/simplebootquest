SELECT kind, COUNT(*) AS total
FROM workouts
GROUP BY kind
HAVING COUNT(*) >= 2
ORDER BY kind;
