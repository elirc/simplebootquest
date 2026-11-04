SELECT b.title
FROM books b
JOIN loans l ON l.book_id = b.id;
