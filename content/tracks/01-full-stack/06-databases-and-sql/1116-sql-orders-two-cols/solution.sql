SELECT code, total_cents, items
FROM orders
ORDER BY items, total_cents DESC, code;
