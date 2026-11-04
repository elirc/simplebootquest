SELECT a.name
FROM authors a
WHERE EXISTS (
  SELECT 1
  FROM books b
  JOIN loans l ON l.book_id = b.id
  WHERE b.author_id = a.id AND l.returned_on IS NULL
)
ORDER BY a.name;
