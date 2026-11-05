SELECT name,
  CASE WHEN avg_temp >= 20 THEN 'high' WHEN avg_temp < 11 THEN 'low' ELSE 'medium' END AS band
FROM cities
ORDER BY name;
