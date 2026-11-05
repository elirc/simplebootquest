SELECT t.name,
  SUM(CASE WHEN ev.kind = 'view' THEN 1 ELSE 0 END) AS views,
  SUM(CASE WHEN ev.kind = 'like' THEN 1 ELSE 0 END) AS likes,
  SUM(CASE WHEN ev.kind = 'share' THEN 1 ELSE 0 END) AS shares
FROM employees t
JOIN employee_events ev ON ev.employee_id = t.id
GROUP BY t.id, t.name
ORDER BY t.name;
