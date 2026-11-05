SELECT status, MIN(total_cents) AS min_total_cents, MAX(total_cents) AS max_total_cents
FROM orders
GROUP BY status
ORDER BY status;
