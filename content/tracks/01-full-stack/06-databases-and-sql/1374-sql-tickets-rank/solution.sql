SELECT priority, subject, replies,
  RANK() OVER (PARTITION BY priority ORDER BY replies DESC) AS rank
FROM tickets
ORDER BY priority, rank, subject;
