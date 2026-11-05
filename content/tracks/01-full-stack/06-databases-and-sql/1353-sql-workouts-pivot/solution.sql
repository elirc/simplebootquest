SELECT t.label,
  SUM(CASE WHEN ev.kind = 'view' THEN 1 ELSE 0 END) AS views,
  SUM(CASE WHEN ev.kind = 'like' THEN 1 ELSE 0 END) AS likes,
  SUM(CASE WHEN ev.kind = 'share' THEN 1 ELSE 0 END) AS shares
FROM workouts t
JOIN workout_events ev ON ev.workout_id = t.id
GROUP BY t.id, t.label
ORDER BY t.label;
