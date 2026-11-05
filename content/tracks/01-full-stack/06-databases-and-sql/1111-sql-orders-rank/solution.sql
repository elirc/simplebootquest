SELECT status, code, total_cents,
  RANK() OVER (PARTITION BY status ORDER BY total_cents DESC) AS rank
FROM orders
ORDER BY status, rank, code;
