SELECT category, ROUND(AVG(stock), 1) AS avg_stock
FROM products
GROUP BY category
ORDER BY category;
