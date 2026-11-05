SELECT city, COUNT(*) AS total
FROM hotels
GROUP BY city
ORDER BY total DESC, city;
