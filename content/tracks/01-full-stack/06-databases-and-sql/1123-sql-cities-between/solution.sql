SELECT name
FROM cities
WHERE avg_temp BETWEEN 11 AND 20
ORDER BY avg_temp, name;
