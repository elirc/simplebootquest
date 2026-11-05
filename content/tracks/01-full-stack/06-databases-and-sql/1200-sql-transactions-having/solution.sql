SELECT category, COUNT(*) AS total
FROM transactions
GROUP BY category
HAVING COUNT(*) >= 2
ORDER BY category;
