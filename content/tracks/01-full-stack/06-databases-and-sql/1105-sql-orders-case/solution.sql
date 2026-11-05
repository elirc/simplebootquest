SELECT code,
  CASE WHEN total_cents >= 13501 THEN 'high' WHEN total_cents < 4387 THEN 'low' ELSE 'medium' END AS band
FROM orders
ORDER BY code;
