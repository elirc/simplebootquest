SELECT b.title
FROM books b
JOIN authors a ON a.id = b.author_id
WHERE b.title LIKE '%the%' OR a.name LIKE 'Terry%'
ORDER BY b.title;
