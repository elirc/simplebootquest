SELECT priority, SUM(CASE WHEN resolved = 1 THEN 1 ELSE 0 END) AS total
FROM tickets
GROUP BY priority
ORDER BY priority;
