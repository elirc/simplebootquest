SELECT reference
FROM transactions
WHERE reference LIKE '%x-%'
ORDER BY reference;
