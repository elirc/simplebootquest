SELECT p.category, SUM(oi.quantity * oi.unit_price_cents) / 100 AS revenue, COUNT(*) AS orders
FROM products p
JOIN order_items oi ON oi.product_id = p.id
GROUP BY p.category;
