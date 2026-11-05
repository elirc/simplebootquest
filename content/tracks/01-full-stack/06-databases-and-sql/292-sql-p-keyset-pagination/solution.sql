SELECT id, title, year
FROM books
WHERE year > 1989 OR (year = 1989 AND id > 6)
ORDER BY year, id
LIMIT 3;
