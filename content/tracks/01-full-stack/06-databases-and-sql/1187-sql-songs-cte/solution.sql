WITH per_group AS (
  SELECT artist, AVG(seconds) AS avg_value FROM songs GROUP BY artist
)
SELECT artist
FROM per_group
WHERE avg_value > (SELECT AVG(seconds) FROM songs)
ORDER BY artist;
