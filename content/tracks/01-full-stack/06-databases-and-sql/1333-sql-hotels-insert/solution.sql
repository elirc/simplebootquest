INSERT INTO hotels (id, name, nightly_price, stars, city, breakfast)
VALUES (100, 'New hotel', 275, 1, 'Kyoto', 0);

SELECT COUNT(*) AS total FROM hotels WHERE city = 'Kyoto';
