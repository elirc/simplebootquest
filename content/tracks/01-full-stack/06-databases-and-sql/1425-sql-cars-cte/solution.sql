WITH per_group AS (
  SELECT fuel, AVG(price_k) AS avg_value FROM cars GROUP BY fuel
)
SELECT fuel
FROM per_group
WHERE avg_value > (SELECT AVG(price_k) FROM cars)
ORDER BY fuel;
