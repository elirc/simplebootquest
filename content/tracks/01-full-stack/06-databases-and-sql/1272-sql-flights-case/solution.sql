SELECT number,
  CASE WHEN duration_min >= 542 THEN 'high' WHEN duration_min < 263 THEN 'low' ELSE 'medium' END AS band
FROM flights
ORDER BY number;
