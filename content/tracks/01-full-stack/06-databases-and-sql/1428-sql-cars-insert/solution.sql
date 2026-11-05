INSERT INTO cars (id, model, price_k, km, year, fuel)
VALUES (100, 'New car', 40, 0, 2008, 'diesel');

SELECT COUNT(*) AS total FROM cars WHERE fuel = 'diesel';
