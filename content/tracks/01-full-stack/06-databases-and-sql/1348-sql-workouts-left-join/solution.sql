SELECT t.label, COUNT(ev.id) AS events
FROM workouts t
LEFT JOIN workout_events ev ON ev.workout_id = t.id
GROUP BY t.id, t.label
ORDER BY events DESC, t.label;
