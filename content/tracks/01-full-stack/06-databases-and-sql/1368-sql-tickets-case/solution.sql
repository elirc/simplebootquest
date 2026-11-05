SELECT subject,
  CASE WHEN replies >= 8 THEN 'high' WHEN replies < 4 THEN 'low' ELSE 'medium' END AS band
FROM tickets
ORDER BY subject;
