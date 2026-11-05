SELECT code
FROM orders
WHERE total_cents BETWEEN 4387 AND 13501
ORDER BY total_cents, code;
