SELECT name,
  CASE WHEN open_issues >= 121 THEN 'high' WHEN open_issues < 67 THEN 'low' ELSE 'medium' END AS band
FROM repos
ORDER BY name;
