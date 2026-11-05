SELECT id, avg_temp,
  SUM(avg_temp) OVER (ORDER BY id) AS running_total
FROM cities
ORDER BY id;
