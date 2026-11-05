SELECT id, amount,
  SUM(amount) OVER (ORDER BY id) AS running_total
FROM transactions
ORDER BY id;
