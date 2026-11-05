SELECT id, code
FROM orders
WHERE status IN ('cancelled', 'paid')
ORDER BY id;
