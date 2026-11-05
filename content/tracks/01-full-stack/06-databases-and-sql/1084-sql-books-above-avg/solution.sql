SELECT title
FROM books
WHERE pages > (SELECT AVG(pages) FROM books)
ORDER BY title;
