SELECT name
FROM events t
WHERE NOT EXISTS (SELECT 1 FROM event_events ev WHERE ev.event_id = t.id)
ORDER BY name;
