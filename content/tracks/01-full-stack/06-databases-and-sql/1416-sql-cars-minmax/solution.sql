SELECT fuel, MIN(price_k) AS min_price_k, MAX(price_k) AS max_price_k
FROM cars
GROUP BY fuel
ORDER BY fuel;
