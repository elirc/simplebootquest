DELETE FROM products
WHERE stock = 0
  AND NOT EXISTS (SELECT 1 FROM order_items oi WHERE oi.product_id = products.id);
