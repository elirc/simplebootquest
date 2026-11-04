SELECT a.name AS author, COUNT(b.id) AS books, SUM(b.pages) AS total_pages
FROM authors a
JOIN books b ON b.author_id = a.id
GROUP BY a.id, a.name
HAVING COUNT(b.id) > 1
ORDER BY books DESC, author ASC;
