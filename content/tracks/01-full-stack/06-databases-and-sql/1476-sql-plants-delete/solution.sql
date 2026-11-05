DELETE FROM plants
WHERE water_every_days < 6
  AND NOT EXISTS (SELECT 1 FROM plant_events ev WHERE ev.plant_id = plants.id);
