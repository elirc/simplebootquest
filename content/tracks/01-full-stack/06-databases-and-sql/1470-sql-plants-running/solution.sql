SELECT id, water_every_days,
  SUM(water_every_days) OVER (ORDER BY id) AS running_total
FROM plants
ORDER BY id;
