SELECT id, title
FROM tasks
WHERE assignee IN ('ada', 'grace')
ORDER BY id;
