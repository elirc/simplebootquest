SELECT id, open_issues,
  SUM(open_issues) OVER (ORDER BY id) AS running_total
FROM repos
ORDER BY id;
