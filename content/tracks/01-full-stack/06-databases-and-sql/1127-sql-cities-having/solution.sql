SELECT continent, COUNT(*) AS total
FROM cities
GROUP BY continent
HAVING COUNT(*) >= 2
ORDER BY continent;
