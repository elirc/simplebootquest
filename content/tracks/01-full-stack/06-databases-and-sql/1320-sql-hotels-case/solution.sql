SELECT name,
  CASE WHEN nightly_price >= 384 THEN 'high' WHEN nightly_price < 258 THEN 'low' ELSE 'medium' END AS band
FROM hotels
ORDER BY name;
