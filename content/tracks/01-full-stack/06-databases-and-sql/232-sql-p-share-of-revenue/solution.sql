WITH by_category AS (
  SELECT p.category, SUM(oi.quantity * oi.unit_price_cents) AS revenue_cents
  FROM products p
  JOIN order_items oi ON oi.product_id = p.id
  JOIN orders o ON o.id = oi.order_id
  WHERE o.status IN ('paid', 'shipped')
  GROUP BY p.category
)
SELECT category, revenue_cents, ROUND(revenue_cents * 100.0 / SUM(revenue_cents) OVER (), 1) AS pct
FROM by_category
ORDER BY revenue_cents DESC;
