SELECT fuel, COUNT(*) AS total
FROM cars
GROUP BY fuel
HAVING COUNT(*) >= 2
ORDER BY fuel;
