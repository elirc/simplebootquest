SELECT fuel, ROUND(AVG(price_k), 1) AS avg_price_k
FROM cars
GROUP BY fuel
ORDER BY fuel;
