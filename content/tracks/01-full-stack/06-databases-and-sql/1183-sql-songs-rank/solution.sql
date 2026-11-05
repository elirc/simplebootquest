SELECT artist, title, seconds,
  RANK() OVER (PARTITION BY artist ORDER BY seconds DESC) AS rank
FROM songs
ORDER BY artist, rank, title;
