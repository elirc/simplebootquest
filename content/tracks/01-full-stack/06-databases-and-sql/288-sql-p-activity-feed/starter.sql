SELECT l.borrowed_on AS at, m.name AS member, 'borrowed' AS event, b.title
FROM loans l JOIN members m ON m.id = l.member_id JOIN books b ON b.id = l.book_id
ORDER BY at;
