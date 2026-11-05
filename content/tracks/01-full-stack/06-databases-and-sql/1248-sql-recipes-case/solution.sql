SELECT name,
  CASE WHEN calories >= 651 THEN 'high' WHEN calories < 253 THEN 'low' ELSE 'medium' END AS band
FROM recipes
ORDER BY name;
