SELECT category, COUNT(*) AS total
FROM products
GROUP BY category
ORDER BY total DESC, category;
