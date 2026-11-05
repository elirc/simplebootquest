SELECT name,
  CASE WHEN water_every_days >= 15 THEN 'high' WHEN water_every_days < 6 THEN 'low' ELSE 'medium' END AS band
FROM plants
ORDER BY name;
