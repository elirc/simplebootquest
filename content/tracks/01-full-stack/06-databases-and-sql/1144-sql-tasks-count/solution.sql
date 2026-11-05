SELECT assignee, COUNT(*) AS total
FROM tasks
GROUP BY assignee
ORDER BY total DESC, assignee;
