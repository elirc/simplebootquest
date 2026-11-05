SELECT id, minutes,
  SUM(minutes) OVER (ORDER BY id) AS running_total
FROM workouts
ORDER BY id;
