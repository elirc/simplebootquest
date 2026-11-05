SELECT airline, number, duration_min,
  RANK() OVER (PARTITION BY airline ORDER BY duration_min DESC) AS rank
FROM flights
ORDER BY airline, rank, number;
