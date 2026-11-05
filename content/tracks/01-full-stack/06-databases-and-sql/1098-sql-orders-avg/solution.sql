SELECT status, ROUND(AVG(total_cents), 1) AS avg_total_cents
FROM orders
GROUP BY status
ORDER BY status;
