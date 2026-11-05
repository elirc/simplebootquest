SELECT kind, label, minutes,
  RANK() OVER (PARTITION BY kind ORDER BY minutes DESC) AS rank
FROM workouts
ORDER BY kind, rank, label;
