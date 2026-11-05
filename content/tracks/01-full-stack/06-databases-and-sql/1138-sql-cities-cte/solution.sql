WITH per_group AS (
  SELECT continent, AVG(avg_temp) AS avg_value FROM cities GROUP BY continent
)
SELECT continent
FROM per_group
WHERE avg_value > (SELECT AVG(avg_temp) FROM cities)
ORDER BY continent;
