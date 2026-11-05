SELECT language, COUNT(*) AS total
FROM repos
GROUP BY language
ORDER BY total DESC, language;
