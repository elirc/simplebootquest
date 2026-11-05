SELECT priority, COUNT(*) AS total
FROM tickets
GROUP BY priority
HAVING COUNT(*) >= 2
ORDER BY priority;
