SELECT genre, COUNT(*) AS total
FROM books
GROUP BY genre
HAVING COUNT(*) >= 2
ORDER BY genre;
