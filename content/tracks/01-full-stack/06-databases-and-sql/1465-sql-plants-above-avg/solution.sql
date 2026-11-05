SELECT name
FROM plants
WHERE water_every_days > (SELECT AVG(water_every_days) FROM plants)
ORDER BY name;
