SELECT assignee, MIN(estimate) AS min_estimate, MAX(estimate) AS max_estimate
FROM tasks
GROUP BY assignee
ORDER BY assignee;
