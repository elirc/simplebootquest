SELECT status, COUNT(*) AS total
FROM orders
GROUP BY status
ORDER BY total DESC, status;
