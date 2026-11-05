SELECT genre, ROUND(AVG(pages), 1) AS avg_pages
FROM books
GROUP BY genre
ORDER BY genre;
