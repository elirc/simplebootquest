SELECT b.title
FROM books b
LEFT JOIN loans l ON l.book_id = b.id
WHERE l.id IS NULL
ORDER BY b.title;
