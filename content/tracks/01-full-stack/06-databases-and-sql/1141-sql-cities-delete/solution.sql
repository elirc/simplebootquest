DELETE FROM cities
WHERE avg_temp < 11
  AND NOT EXISTS (SELECT 1 FROM city_events ev WHERE ev.city_id = cities.id);
