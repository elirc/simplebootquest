SELECT id, name
FROM plants
WHERE light IN ('bright', 'low')
ORDER BY id;
