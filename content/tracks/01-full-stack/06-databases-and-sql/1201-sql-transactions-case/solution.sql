SELECT reference,
  CASE WHEN amount >= 942 THEN 'high' WHEN amount < 460 THEN 'low' ELSE 'medium' END AS band
FROM transactions
ORDER BY reference;
