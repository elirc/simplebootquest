SELECT assignee, COUNT(*) AS total
FROM tasks
GROUP BY assignee
HAVING COUNT(*) >= 2
ORDER BY assignee;
