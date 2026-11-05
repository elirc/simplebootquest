SELECT name, open_issues
FROM repos
ORDER BY open_issues DESC, name
LIMIT 3;
