SELECT category, MIN(amount) AS min_amount, MAX(amount) AS max_amount
FROM transactions
GROUP BY category
ORDER BY category;
