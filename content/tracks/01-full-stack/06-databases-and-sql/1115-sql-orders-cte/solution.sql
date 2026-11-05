WITH per_group AS (
  SELECT status, AVG(total_cents) AS avg_value FROM orders GROUP BY status
)
SELECT status
FROM per_group
WHERE avg_value > (SELECT AVG(total_cents) FROM orders)
ORDER BY status;
