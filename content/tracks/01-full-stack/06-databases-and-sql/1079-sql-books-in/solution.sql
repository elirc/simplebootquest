SELECT id, title
FROM books
WHERE genre IN ('classic', 'fiction')
ORDER BY id;
