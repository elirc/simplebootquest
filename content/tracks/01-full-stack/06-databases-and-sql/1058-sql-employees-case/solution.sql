SELECT name,
  CASE WHEN years_at_company >= 13 THEN 'high' WHEN years_at_company < 10 THEN 'low' ELSE 'medium' END AS band
FROM employees
ORDER BY name;
