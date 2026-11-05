DELETE FROM products
WHERE stock < 5
  AND NOT EXISTS (SELECT 1 FROM product_events ev WHERE ev.product_id = products.id);
