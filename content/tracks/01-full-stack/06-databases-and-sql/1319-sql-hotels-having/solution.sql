SELECT city, COUNT(*) AS total
FROM hotels
GROUP BY city
HAVING COUNT(*) >= 2
ORDER BY city;
