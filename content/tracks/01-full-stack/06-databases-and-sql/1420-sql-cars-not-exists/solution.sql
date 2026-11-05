SELECT model
FROM cars t
WHERE NOT EXISTS (SELECT 1 FROM car_events ev WHERE ev.car_id = t.id)
ORDER BY model;
