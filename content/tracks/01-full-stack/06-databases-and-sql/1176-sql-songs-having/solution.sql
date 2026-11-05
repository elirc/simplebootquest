SELECT artist, COUNT(*) AS total
FROM songs
GROUP BY artist
HAVING COUNT(*) >= 2
ORDER BY artist;
