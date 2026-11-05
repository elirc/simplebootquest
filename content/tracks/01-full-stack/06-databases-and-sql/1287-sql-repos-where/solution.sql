SELECT name, open_issues
FROM repos
WHERE open_issues > 87
ORDER BY open_issues DESC, name;
