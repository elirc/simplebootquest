SELECT light, ROUND(AVG(water_every_days), 1) AS avg_water_every_days
FROM plants
GROUP BY light
ORDER BY light;
