SELECT id, reference
FROM transactions
WHERE category IN ('fun', 'rent')
ORDER BY id;
