SELECT p.name, COUNT(*) AS units
FROM products p
JOIN order_items oi ON oi.product_id = p.id
GROUP BY p.id
LIMIT 3;
