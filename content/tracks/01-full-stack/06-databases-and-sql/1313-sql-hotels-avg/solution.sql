SELECT city, ROUND(AVG(nightly_price), 1) AS avg_nightly_price
FROM hotels
GROUP BY city
ORDER BY city;
