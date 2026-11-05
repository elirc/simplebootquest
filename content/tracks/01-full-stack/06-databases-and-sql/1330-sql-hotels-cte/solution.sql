WITH per_group AS (
  SELECT city, AVG(nightly_price) AS avg_value FROM hotels GROUP BY city
)
SELECT city
FROM per_group
WHERE avg_value > (SELECT AVG(nightly_price) FROM hotels)
ORDER BY city;
