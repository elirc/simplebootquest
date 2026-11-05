SELECT number, duration_min, delay_min
FROM flights
ORDER BY delay_min, duration_min DESC, number;
