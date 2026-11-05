INSERT INTO orders (id, code, total_cents, items, status, country)
VALUES (100, 'New order', 9244, 1, 'cancelled', 'UK');

SELECT COUNT(*) AS total FROM orders WHERE status = 'cancelled';
