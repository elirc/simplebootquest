SELECT number, duration_min
FROM flights
WHERE duration_min > 459
ORDER BY duration_min DESC, number;
