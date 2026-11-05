SELECT name
FROM repos
WHERE open_issues > (SELECT AVG(open_issues) FROM repos)
ORDER BY name;
