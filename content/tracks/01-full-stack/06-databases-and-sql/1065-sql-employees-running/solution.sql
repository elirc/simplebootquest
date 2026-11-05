SELECT id, years_at_company,
  SUM(years_at_company) OVER (ORDER BY id) AS running_total
FROM employees
ORDER BY id;
