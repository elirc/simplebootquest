SELECT model,
  CASE WHEN price_k >= 47 THEN 'high' WHEN price_k < 35 THEN 'low' ELSE 'medium' END AS band
FROM cars
ORDER BY model;
