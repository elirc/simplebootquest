SELECT model
FROM cars
WHERE price_k > (SELECT AVG(price_k) FROM cars)
ORDER BY model;
