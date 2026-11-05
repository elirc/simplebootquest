SELECT p.category, SUM(oi.quantity * oi.unit_price_cents) AS revenue_cents, 100 AS pct
FROM products p JOIN order_items oi ON oi.product_id = p.id
GROUP BY p.category;
