SELECT artist, COUNT(*) AS total
FROM songs
GROUP BY artist
ORDER BY total DESC, artist;
