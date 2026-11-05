WITH per_group AS (
  SELECT light, AVG(water_every_days) AS avg_value FROM plants GROUP BY light
)
SELECT light
FROM per_group
WHERE avg_value > (SELECT AVG(water_every_days) FROM plants)
ORDER BY light;
