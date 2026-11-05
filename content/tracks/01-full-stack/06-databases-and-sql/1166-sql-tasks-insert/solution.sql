INSERT INTO tasks (id, title, estimate, priority, assignee, status, blocked)
VALUES (100, 'New task', 9, 1, 'ada', 'todo', 0);

SELECT COUNT(*) AS total FROM tasks WHERE assignee = 'ada';
