SELECT status, COUNT(*) AS total
FROM orders
GROUP BY status
HAVING COUNT(*) >= 2
ORDER BY status;
