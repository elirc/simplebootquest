SELECT p.category,
       ROUND(SUM(oi.quantity * oi.unit_price_cents) / 100.0, 2) AS revenue,
       COUNT(DISTINCT oi.order_id) AS orders
FROM products p
JOIN order_items oi ON oi.product_id = p.id
JOIN orders o ON o.id = oi.order_id
WHERE o.status IN ('paid', 'shipped')
GROUP BY p.category
ORDER BY revenue DESC;
