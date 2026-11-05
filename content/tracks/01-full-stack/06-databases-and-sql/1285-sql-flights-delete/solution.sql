DELETE FROM flights
WHERE duration_min < 263
  AND NOT EXISTS (SELECT 1 FROM flight_events ev WHERE ev.flight_id = flights.id);
