SELECT continent, MIN(avg_temp) AS min_avg_temp, MAX(avg_temp) AS max_avg_temp
FROM cities
GROUP BY continent
ORDER BY continent;
