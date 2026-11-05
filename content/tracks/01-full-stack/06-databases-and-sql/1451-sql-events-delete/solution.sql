DELETE FROM events
WHERE registered < 108
  AND NOT EXISTS (SELECT 1 FROM event_events ev WHERE ev.event_id = events.id);
