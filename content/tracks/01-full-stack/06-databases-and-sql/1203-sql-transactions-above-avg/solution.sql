SELECT reference
FROM transactions
WHERE amount > (SELECT AVG(amount) FROM transactions)
ORDER BY reference;
