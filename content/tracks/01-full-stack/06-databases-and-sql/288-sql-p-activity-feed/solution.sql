SELECT l.borrowed_on AS at, m.name AS member, 'borrowed' AS event, b.title
FROM loans l JOIN members m ON m.id = l.member_id JOIN books b ON b.id = l.book_id
UNION ALL
SELECT l.returned_on, m.name, 'returned', b.title
FROM loans l JOIN members m ON m.id = l.member_id JOIN books b ON b.id = l.book_id
WHERE l.returned_on IS NOT NULL
ORDER BY at, event;
