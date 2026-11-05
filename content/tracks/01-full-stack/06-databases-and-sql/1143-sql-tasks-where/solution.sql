SELECT title, estimate
FROM tasks
WHERE estimate > 9
ORDER BY estimate DESC, title;
