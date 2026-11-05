SELECT name
FROM products t
WHERE NOT EXISTS (SELECT 1 FROM product_events ev WHERE ev.product_id = t.id)
ORDER BY name;
