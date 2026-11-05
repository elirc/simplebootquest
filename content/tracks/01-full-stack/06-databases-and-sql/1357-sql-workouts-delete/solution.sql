DELETE FROM workouts
WHERE minutes < 25
  AND NOT EXISTS (SELECT 1 FROM workout_events ev WHERE ev.workout_id = workouts.id);
