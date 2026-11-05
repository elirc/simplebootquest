SELECT m.name AS member, b.title, 0 AS days_out
FROM loans l JOIN members m ON m.id = l.member_id JOIN books b ON b.id = l.book_id
WHERE l.returned_on IS NULL;
