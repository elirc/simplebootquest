SELECT label
FROM workouts t
WHERE NOT EXISTS (SELECT 1 FROM workout_events ev WHERE ev.workout_id = t.id)
ORDER BY label;
