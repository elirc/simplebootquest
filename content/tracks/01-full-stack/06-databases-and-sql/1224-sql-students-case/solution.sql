SELECT name,
  CASE WHEN age >= 30 THEN 'high' WHEN age < 24 THEN 'low' ELSE 'medium' END AS band
FROM students
ORDER BY name;
