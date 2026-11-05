SELECT a.name AS author, b.title, MAX(b.pages) AS pages
FROM authors a JOIN books b ON b.author_id = a.id
GROUP BY a.id;
