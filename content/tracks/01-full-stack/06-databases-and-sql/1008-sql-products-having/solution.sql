SELECT category, COUNT(*) AS total
FROM products
GROUP BY category
HAVING COUNT(*) >= 2
ORDER BY category;
