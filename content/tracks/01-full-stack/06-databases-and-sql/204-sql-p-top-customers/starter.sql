SELECT c.name, SUM(oi.quantity * oi.unit_price_cents) AS spent_cents
FROM customers c
JOIN orders o ON o.customer_id = c.id
JOIN order_items oi ON oi.order_id = o.id
GROUP BY c.id
ORDER BY spent_cents DESC;
