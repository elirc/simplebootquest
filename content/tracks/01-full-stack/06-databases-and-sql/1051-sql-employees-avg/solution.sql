SELECT level, ROUND(AVG(years_at_company), 1) AS avg_years_at_company
FROM employees
GROUP BY level
ORDER BY level;
