SELECT assignee, title, estimate,
  RANK() OVER (PARTITION BY assignee ORDER BY estimate DESC) AS rank
FROM tasks
ORDER BY assignee, rank, title;
