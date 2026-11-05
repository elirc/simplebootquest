SELECT p.name, SUM(oi.quantity) AS units
FROM products p
JOIN order_items oi ON oi.product_id = p.id
JOIN orders o ON o.id = oi.order_id
WHERE o.status <> 'cancelled'
GROUP BY p.id, p.name
ORDER BY units DESC, p.name
LIMIT 3;
