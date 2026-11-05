SELECT name
FROM repos
WHERE open_issues BETWEEN 67 AND 121
ORDER BY open_issues, name;
