SELECT language, MIN(open_issues) AS min_open_issues, MAX(open_issues) AS max_open_issues
FROM repos
GROUP BY language
ORDER BY language;
