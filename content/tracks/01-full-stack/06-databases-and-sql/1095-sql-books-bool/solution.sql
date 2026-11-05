SELECT genre, SUM(CASE WHEN available = 1 THEN 1 ELSE 0 END) AS total
FROM books
GROUP BY genre
ORDER BY genre;
