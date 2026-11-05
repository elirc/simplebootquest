SELECT language, SUM(CASE WHEN archived = 1 THEN 1 ELSE 0 END) AS total
FROM repos
GROUP BY language
ORDER BY language;
