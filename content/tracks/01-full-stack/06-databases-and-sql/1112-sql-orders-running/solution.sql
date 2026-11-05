SELECT id, total_cents,
  SUM(total_cents) OVER (ORDER BY id) AS running_total
FROM orders
ORDER BY id;
