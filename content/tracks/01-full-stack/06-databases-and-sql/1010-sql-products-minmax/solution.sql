SELECT category, MIN(stock) AS min_stock, MAX(stock) AS max_stock
FROM products
GROUP BY category
ORDER BY category;
