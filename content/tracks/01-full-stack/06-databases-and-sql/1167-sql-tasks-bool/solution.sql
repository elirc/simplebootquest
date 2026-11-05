SELECT assignee, SUM(CASE WHEN blocked = 1 THEN 1 ELSE 0 END) AS total
FROM tasks
GROUP BY assignee
ORDER BY assignee;
