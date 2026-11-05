INSERT INTO cities (id, name, avg_temp, population, continent)
VALUES (100, 'New city', 14, 300, 'Americas');

SELECT COUNT(*) AS total FROM cities WHERE continent = 'Americas';
