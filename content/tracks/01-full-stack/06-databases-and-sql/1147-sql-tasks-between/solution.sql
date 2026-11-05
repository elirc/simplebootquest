SELECT title
FROM tasks
WHERE estimate BETWEEN 3 AND 11
ORDER BY estimate, title;
