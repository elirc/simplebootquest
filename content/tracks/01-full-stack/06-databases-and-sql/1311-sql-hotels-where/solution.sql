SELECT name, nightly_price
FROM hotels
WHERE nightly_price > 275
ORDER BY nightly_price DESC, name;
