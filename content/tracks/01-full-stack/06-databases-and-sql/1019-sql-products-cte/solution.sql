WITH per_group AS (
  SELECT category, AVG(stock) AS avg_value FROM products GROUP BY category
)
SELECT category
FROM per_group
WHERE avg_value > (SELECT AVG(stock) FROM products)
ORDER BY category;
