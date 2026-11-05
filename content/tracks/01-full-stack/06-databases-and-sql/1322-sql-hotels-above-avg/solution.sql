SELECT name
FROM hotels
WHERE nightly_price > (SELECT AVG(nightly_price) FROM hotels)
ORDER BY name;
