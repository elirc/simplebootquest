SELECT id, duration_min,
  SUM(duration_min) OVER (ORDER BY id) AS running_total
FROM flights
ORDER BY id;
