SELECT language, name, open_issues,
  RANK() OVER (PARTITION BY language ORDER BY open_issues DESC) AS rank
FROM repos
ORDER BY language, rank, name;
