SELECT a.name AS author, b.title, b.year, NULL AS gap
FROM books b JOIN authors a ON a.id = b.author_id
ORDER BY author, year;
