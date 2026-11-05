WITH per_group AS (
  SELECT language, AVG(open_issues) AS avg_value FROM repos GROUP BY language
)
SELECT language
FROM per_group
WHERE avg_value > (SELECT AVG(open_issues) FROM repos)
ORDER BY language;
