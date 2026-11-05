SELECT id, label
FROM workouts
WHERE kind IN ('cardio', 'strength')
ORDER BY id;
