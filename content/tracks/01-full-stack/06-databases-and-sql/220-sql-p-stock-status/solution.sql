SELECT sku, name, stock,
       CASE WHEN stock = 0 THEN 'out' WHEN stock < 5 THEN 'low' ELSE 'ok' END AS status
FROM products
WHERE stock < 5
ORDER BY stock, sku;
