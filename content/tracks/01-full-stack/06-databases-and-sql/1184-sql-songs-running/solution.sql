SELECT id, seconds,
  SUM(seconds) OVER (ORDER BY id) AS running_total
FROM songs
ORDER BY id;
