SELECT o.id AS order_id, c.name AS customer, SUM(oi.quantity) AS items, SUM(oi.quantity * oi.unit_price_cents) AS total_cents
FROM orders o
JOIN customers c ON c.id = o.customer_id
JOIN order_items oi ON oi.order_id = o.id
GROUP BY o.id, c.name
ORDER BY total_cents DESC, order_id;
