SELECT genre, COUNT(*) AS total
FROM books
GROUP BY genre;
