SELECT genre, title, pages,
  RANK() OVER (PARTITION BY genre ORDER BY pages DESC) AS rank
FROM books
ORDER BY genre, rank, title;
