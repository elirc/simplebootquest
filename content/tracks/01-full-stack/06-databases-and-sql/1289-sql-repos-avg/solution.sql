SELECT language, ROUND(AVG(open_issues), 1) AS avg_open_issues
FROM repos
GROUP BY language
ORDER BY language;
