SELECT fuel, model, price_k,
  RANK() OVER (PARTITION BY fuel ORDER BY price_k DESC) AS rank
FROM cars
ORDER BY fuel, rank, model;
