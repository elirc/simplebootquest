WITH ranked AS (
  SELECT genre, title, pages,
    ROW_NUMBER() OVER (PARTITION BY genre ORDER BY pages DESC) AS rn
  FROM books
)
SELECT genre, title, pages
FROM ranked
WHERE rn = 1
ORDER BY genre;
