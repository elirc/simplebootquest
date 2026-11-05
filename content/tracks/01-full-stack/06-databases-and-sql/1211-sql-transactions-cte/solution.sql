WITH per_group AS (
  SELECT category, AVG(amount) AS avg_value FROM transactions GROUP BY category
)
SELECT category
FROM per_group
WHERE avg_value > (SELECT AVG(amount) FROM transactions)
ORDER BY category;
