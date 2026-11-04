WITH totals AS (
  SELECT m.id, m.name,
    COUNT(l.id) AS total_loans,
    SUM(CASE WHEN l.id IS NOT NULL AND l.returned_on IS NULL THEN 1 ELSE 0 END) AS active,
    COALESCE(SUM(CASE WHEN l.returned_on IS NOT NULL THEN b.pages END), 0) AS pages_read
  FROM members m
  LEFT JOIN loans l ON l.member_id = m.id
  LEFT JOIN books b ON b.id = l.book_id
  GROUP BY m.id, m.name
),
genre_counts AS (
  SELECT l.member_id, b.genre, COUNT(*) AS n,
    ROW_NUMBER() OVER (PARTITION BY l.member_id ORDER BY COUNT(*) DESC, b.genre) AS rn
  FROM loans l
  JOIN books b ON b.id = l.book_id
  GROUP BY l.member_id, b.genre
)
SELECT t.name AS member, t.total_loans, t.active, g.genre AS favourite_genre, t.pages_read
FROM totals t
LEFT JOIN genre_counts g ON g.member_id = t.id AND g.rn = 1
ORDER BY t.total_loans DESC, t.name;
