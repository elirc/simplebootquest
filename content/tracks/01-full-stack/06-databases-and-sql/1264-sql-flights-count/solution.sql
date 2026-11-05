SELECT airline, COUNT(*) AS total
FROM flights
GROUP BY airline
ORDER BY total DESC, airline;
