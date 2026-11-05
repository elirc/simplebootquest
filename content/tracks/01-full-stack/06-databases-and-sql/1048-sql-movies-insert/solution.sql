INSERT INTO movies (id, title, rating, year, minutes, genre)
VALUES (100, 'New movie', 7.3, 1980, 82, 'sci-fi');

SELECT COUNT(*) AS total FROM movies WHERE genre = 'sci-fi';
