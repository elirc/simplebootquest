SELECT category, SUM(CASE WHEN on_sale = 1 THEN 1 ELSE 0 END) AS total
FROM products
GROUP BY category
ORDER BY category;
