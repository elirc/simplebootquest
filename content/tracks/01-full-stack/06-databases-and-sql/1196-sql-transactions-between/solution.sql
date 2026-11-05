SELECT reference
FROM transactions
WHERE amount BETWEEN 460 AND 942
ORDER BY amount, reference;
