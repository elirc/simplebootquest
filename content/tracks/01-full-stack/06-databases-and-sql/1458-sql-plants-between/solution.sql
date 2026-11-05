SELECT name
FROM plants
WHERE water_every_days BETWEEN 6 AND 15
ORDER BY water_every_days, name;
