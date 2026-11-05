SELECT name,
  CASE WHEN registered >= 247 THEN 'high' WHEN registered < 108 THEN 'low' ELSE 'medium' END AS band
FROM events
ORDER BY name;
