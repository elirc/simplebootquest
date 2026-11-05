SELECT continent, name, avg_temp,
  RANK() OVER (PARTITION BY continent ORDER BY avg_temp DESC) AS rank
FROM cities
ORDER BY continent, rank, name;
