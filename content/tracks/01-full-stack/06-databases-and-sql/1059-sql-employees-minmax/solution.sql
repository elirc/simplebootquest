SELECT level, MIN(years_at_company) AS min_years_at_company, MAX(years_at_company) AS max_years_at_company
FROM employees
GROUP BY level
ORDER BY level;
