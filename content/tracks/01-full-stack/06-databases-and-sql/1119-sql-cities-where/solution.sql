SELECT name, avg_temp
FROM cities
WHERE avg_temp > 14
ORDER BY avg_temp DESC, name;
