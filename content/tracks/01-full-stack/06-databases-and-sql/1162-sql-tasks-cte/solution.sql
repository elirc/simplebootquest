WITH per_group AS (
  SELECT assignee, AVG(estimate) AS avg_value FROM tasks GROUP BY assignee
)
SELECT assignee
FROM per_group
WHERE avg_value > (SELECT AVG(estimate) FROM tasks)
ORDER BY assignee;
