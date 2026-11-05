SELECT a.name AS author, b.title, b.year,
       b.year - LAG(b.year) OVER (PARTITION BY b.author_id ORDER BY b.year) AS gap
FROM books b
JOIN authors a ON a.id = b.author_id
ORDER BY author, b.year;
