SELECT t.label, SUM(ev.amount) AS total
FROM workouts t
JOIN workout_events ev ON ev.workout_id = t.id
GROUP BY t.id, t.label
ORDER BY total DESC, t.label;
