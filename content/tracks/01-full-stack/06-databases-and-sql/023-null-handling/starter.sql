SELECT l.id, b.title, l.returned_on AS status
FROM loans l
JOIN books b ON b.id = l.book_id
ORDER BY l.id;
