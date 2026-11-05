SELECT name
FROM cities
WHERE avg_temp > (SELECT AVG(avg_temp) FROM cities)
ORDER BY name;
