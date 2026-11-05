SELECT m.name AS member, b.title,
       CAST(julianday('2026-02-20') - julianday(l.borrowed_on) AS INTEGER) AS days_out
FROM loans l
JOIN members m ON m.id = l.member_id
JOIN books b ON b.id = l.book_id
WHERE l.returned_on IS NULL
  AND julianday('2026-02-20') - julianday(l.borrowed_on) > 14
ORDER BY days_out DESC;
