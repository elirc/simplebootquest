SELECT title, genre, pages
FROM books
WHERE genre IN ('sci-fi', 'fantasy')
  AND year >= 1980
  AND pages < 400
ORDER BY pages ASC;
