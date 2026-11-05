SELECT code, total_cents
FROM orders
ORDER BY total_cents DESC, code
LIMIT 3;
