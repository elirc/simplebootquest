SELECT artist, MIN(seconds) AS min_seconds, MAX(seconds) AS max_seconds
FROM songs
GROUP BY artist
ORDER BY artist;
