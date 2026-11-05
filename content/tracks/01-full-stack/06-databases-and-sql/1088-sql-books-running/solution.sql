SELECT id, pages,
  SUM(pages) OVER (ORDER BY id) AS running_total
FROM books
ORDER BY id;
