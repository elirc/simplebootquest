SELECT name
FROM hotels t
WHERE NOT EXISTS (SELECT 1 FROM hotel_events ev WHERE ev.hotel_id = t.id)
ORDER BY name;
