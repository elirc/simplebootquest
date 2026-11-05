SELECT category, ROUND(AVG(amount), 1) AS avg_amount
FROM transactions
GROUP BY category
ORDER BY category;
