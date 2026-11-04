WITH loans_per_book AS (
  SELECT book_id, COUNT(*) AS n
  FROM loans
  GROUP BY book_id
)
SELECT b.genre, COALESCE(SUM(lpb.n), 0) AS loan_count
FROM books b
LEFT JOIN loans_per_book lpb ON lpb.book_id = b.id
GROUP BY b.genre
ORDER BY loan_count DESC, b.genre;
