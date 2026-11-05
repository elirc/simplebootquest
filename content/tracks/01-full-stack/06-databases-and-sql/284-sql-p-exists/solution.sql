SELECT a.name
FROM authors a
WHERE EXISTS (SELECT 1 FROM books b WHERE b.author_id = a.id AND b.genre = 'sci-fi')
  AND EXISTS (SELECT 1 FROM books b WHERE b.author_id = a.id AND b.pages > 300)
ORDER BY a.name;
