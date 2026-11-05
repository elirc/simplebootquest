SELECT airline, COUNT(*) AS total
FROM flights
GROUP BY airline
HAVING COUNT(*) >= 2
ORDER BY airline;
