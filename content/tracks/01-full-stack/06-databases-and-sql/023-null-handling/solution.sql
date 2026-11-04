SELECT l.id, b.title, COALESCE(l.returned_on, 'on loan') AS status
FROM loans l
JOIN books b ON b.id = l.book_id
ORDER BY l.id;
