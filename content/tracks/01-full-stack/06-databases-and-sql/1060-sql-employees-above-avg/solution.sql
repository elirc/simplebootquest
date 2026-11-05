SELECT name
FROM employees
WHERE years_at_company > (SELECT AVG(years_at_company) FROM employees)
ORDER BY name;
