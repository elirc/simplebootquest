SELECT id, registered,
  SUM(registered) OVER (ORDER BY id) AS running_total
FROM events
ORDER BY id;
