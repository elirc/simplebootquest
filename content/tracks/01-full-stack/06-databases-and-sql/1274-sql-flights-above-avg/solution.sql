SELECT number
FROM flights
WHERE duration_min > (SELECT AVG(duration_min) FROM flights)
ORDER BY number;
