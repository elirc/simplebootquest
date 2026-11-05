SELECT continent, COUNT(*) AS total
FROM cities
GROUP BY continent
ORDER BY total DESC, continent;
