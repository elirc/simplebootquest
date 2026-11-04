SELECT m.name AS member, b.title, a.name AS author
FROM loans l
JOIN members m ON m.id = l.member_id
JOIN books b ON b.id = l.book_id
JOIN authors a ON a.id = b.author_id
WHERE l.returned_on IS NULL
ORDER BY l.borrowed_on ASC;
