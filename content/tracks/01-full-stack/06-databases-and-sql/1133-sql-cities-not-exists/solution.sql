SELECT name
FROM cities t
WHERE NOT EXISTS (SELECT 1 FROM city_events ev WHERE ev.city_id = t.id)
ORDER BY name;
