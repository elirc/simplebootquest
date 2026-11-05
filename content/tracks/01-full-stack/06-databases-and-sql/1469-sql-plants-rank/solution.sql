SELECT light, name, water_every_days,
  RANK() OVER (PARTITION BY light ORDER BY water_every_days DESC) AS rank
FROM plants
ORDER BY light, rank, name;
