SELECT category, reference, amount,
  RANK() OVER (PARTITION BY category ORDER BY amount DESC) AS rank
FROM transactions
ORDER BY category, rank, reference;
