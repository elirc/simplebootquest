SELECT name
FROM plants t
WHERE NOT EXISTS (SELECT 1 FROM plant_events ev WHERE ev.plant_id = t.id)
ORDER BY name;
