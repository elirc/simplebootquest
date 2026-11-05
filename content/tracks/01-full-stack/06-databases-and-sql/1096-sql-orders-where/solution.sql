SELECT code, total_cents
FROM orders
WHERE total_cents > 9244
ORDER BY total_cents DESC, code;
