SELECT code
FROM orders
WHERE total_cents > (SELECT AVG(total_cents) FROM orders)
ORDER BY code;
