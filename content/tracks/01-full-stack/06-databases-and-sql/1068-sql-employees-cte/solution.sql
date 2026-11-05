WITH per_group AS (
  SELECT level, AVG(years_at_company) AS avg_value FROM employees GROUP BY level
)
SELECT level
FROM per_group
WHERE avg_value > (SELECT AVG(years_at_company) FROM employees)
ORDER BY level;
