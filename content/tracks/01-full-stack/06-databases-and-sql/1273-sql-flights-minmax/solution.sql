SELECT airline, MIN(duration_min) AS min_duration_min, MAX(duration_min) AS max_duration_min
FROM flights
GROUP BY airline
ORDER BY airline;
