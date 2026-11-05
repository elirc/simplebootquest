SELECT name, open_issues, stars
FROM repos
ORDER BY stars, open_issues DESC, name;
