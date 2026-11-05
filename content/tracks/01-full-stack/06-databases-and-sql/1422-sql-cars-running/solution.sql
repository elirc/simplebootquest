SELECT id, price_k,
  SUM(price_k) OVER (ORDER BY id) AS running_total
FROM cars
ORDER BY id;
