SELECT fuel, COUNT(*) AS total
FROM cars
GROUP BY fuel
ORDER BY total DESC, fuel;
