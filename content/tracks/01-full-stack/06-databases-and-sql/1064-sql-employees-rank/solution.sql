SELECT level, name, years_at_company,
  RANK() OVER (PARTITION BY level ORDER BY years_at_company DESC) AS rank
FROM employees
ORDER BY level, rank, name;
