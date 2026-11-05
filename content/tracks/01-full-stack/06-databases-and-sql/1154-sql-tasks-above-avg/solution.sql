SELECT title
FROM tasks
WHERE estimate > (SELECT AVG(estimate) FROM tasks)
ORDER BY title;
