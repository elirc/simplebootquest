SELECT b.title
FROM books b
JOIN authors a ON a.id = b.author_id;
