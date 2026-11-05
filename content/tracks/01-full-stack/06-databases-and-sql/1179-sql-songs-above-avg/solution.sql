SELECT title
FROM songs
WHERE seconds > (SELECT AVG(seconds) FROM songs)
ORDER BY title;
