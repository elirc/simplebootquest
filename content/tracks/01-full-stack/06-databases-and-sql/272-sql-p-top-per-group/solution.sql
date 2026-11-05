WITH ranked AS (
  SELECT a.name AS author, b.title, b.pages,
         ROW_NUMBER() OVER (PARTITION BY a.id ORDER BY b.pages DESC) AS rn
  FROM authors a
  JOIN books b ON b.author_id = a.id
)
SELECT author, title, pages FROM ranked WHERE rn = 1 ORDER BY author;
