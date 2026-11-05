SELECT airline, ROUND(AVG(duration_min), 1) AS avg_duration_min
FROM flights
GROUP BY airline
ORDER BY airline;
