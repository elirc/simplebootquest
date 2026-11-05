SELECT reference, amount
FROM transactions
WHERE amount > 648
ORDER BY amount DESC, reference;
