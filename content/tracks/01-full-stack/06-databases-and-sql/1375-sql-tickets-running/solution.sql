SELECT id, replies,
  SUM(replies) OVER (ORDER BY id) AS running_total
FROM tickets
ORDER BY id;
