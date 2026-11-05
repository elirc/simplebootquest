SELECT light, MIN(water_every_days) AS min_water_every_days, MAX(water_every_days) AS max_water_every_days
FROM plants
GROUP BY light
ORDER BY light;
