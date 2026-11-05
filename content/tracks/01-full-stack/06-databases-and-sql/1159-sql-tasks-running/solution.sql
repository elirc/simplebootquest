SELECT id, estimate,
  SUM(estimate) OVER (ORDER BY id) AS running_total
FROM tasks
ORDER BY id;
