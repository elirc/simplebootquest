SELECT c.name, SUM(oi.quantity * oi.unit_price_cents) AS spent_cents
FROM customers c
JOIN orders o ON o.customer_id = c.id
JOIN order_items oi ON oi.order_id = o.id
WHERE o.status IN ('paid', 'shipped')
GROUP BY c.id, c.name
HAVING SUM(oi.quantity * oi.unit_price_cents) >= 30000
ORDER BY spent_cents DESC;
