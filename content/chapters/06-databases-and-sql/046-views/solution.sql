CREATE VIEW author_stats AS
SELECT a.name AS author, COUNT(b.id) AS books, SUM(b.pages) AS total_pages, MAX(b.year) AS latest_year
FROM authors a
JOIN books b ON b.author_id = a.id
GROUP BY a.id, a.name;

SELECT * FROM author_stats WHERE books >= 2 ORDER BY latest_year DESC;
