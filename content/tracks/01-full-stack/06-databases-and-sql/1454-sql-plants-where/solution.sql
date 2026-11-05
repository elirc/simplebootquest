SELECT name, water_every_days
FROM plants
WHERE water_every_days > 9
ORDER BY water_every_days DESC, name;
