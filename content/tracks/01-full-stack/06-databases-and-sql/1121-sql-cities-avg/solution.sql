SELECT continent, ROUND(AVG(avg_temp), 1) AS avg_avg_temp
FROM cities
GROUP BY continent
ORDER BY continent;
