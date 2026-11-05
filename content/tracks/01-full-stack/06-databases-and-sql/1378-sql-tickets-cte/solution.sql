WITH per_group AS (
  SELECT priority, AVG(replies) AS avg_value FROM tickets GROUP BY priority
)
SELECT priority
FROM per_group
WHERE avg_value > (SELECT AVG(replies) FROM tickets)
ORDER BY priority;
