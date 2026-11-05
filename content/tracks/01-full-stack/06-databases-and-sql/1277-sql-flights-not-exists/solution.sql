SELECT number
FROM flights t
WHERE NOT EXISTS (SELECT 1 FROM flight_events ev WHERE ev.flight_id = t.id)
ORDER BY number;
