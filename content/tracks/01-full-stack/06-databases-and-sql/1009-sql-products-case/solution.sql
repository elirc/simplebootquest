SELECT name,
  CASE WHEN stock >= 29 THEN 'high' WHEN stock < 5 THEN 'low' ELSE 'medium' END AS band
FROM products
ORDER BY name;
