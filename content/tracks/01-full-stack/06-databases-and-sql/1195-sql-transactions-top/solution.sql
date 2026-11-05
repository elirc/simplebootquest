SELECT reference, amount
FROM transactions
ORDER BY amount DESC, reference
LIMIT 3;
