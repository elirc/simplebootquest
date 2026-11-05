SELECT assignee, ROUND(AVG(estimate), 1) AS avg_estimate
FROM tasks
GROUP BY assignee
ORDER BY assignee;
