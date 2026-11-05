SELECT city, MIN(nightly_price) AS min_nightly_price, MAX(nightly_price) AS max_nightly_price
FROM hotels
GROUP BY city
ORDER BY city;
