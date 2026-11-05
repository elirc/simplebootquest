SELECT category, COUNT(*) AS total
FROM transactions
GROUP BY category
ORDER BY total DESC, category;
