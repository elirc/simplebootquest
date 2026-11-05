SELECT genre, MIN(pages) AS min_pages, MAX(pages) AS max_pages
FROM books
GROUP BY genre
ORDER BY genre;
