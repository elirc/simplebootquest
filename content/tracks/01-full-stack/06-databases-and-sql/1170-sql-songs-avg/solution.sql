SELECT artist, ROUND(AVG(seconds), 1) AS avg_seconds
FROM songs
GROUP BY artist
ORDER BY artist;
