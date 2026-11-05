SELECT format, name, registered,
  RANK() OVER (PARTITION BY format ORDER BY registered DESC) AS rank
FROM events
ORDER BY format, rank, name;
