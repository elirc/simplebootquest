SELECT city, SUM(CASE WHEN breakfast = 1 THEN 1 ELSE 0 END) AS total
FROM hotels
GROUP BY city
ORDER BY city;
