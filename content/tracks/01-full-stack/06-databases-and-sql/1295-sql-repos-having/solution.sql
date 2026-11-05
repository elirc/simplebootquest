SELECT language, COUNT(*) AS total
FROM repos
GROUP BY language
HAVING COUNT(*) >= 2
ORDER BY language;
