SELECT priority, COUNT(*) AS total
FROM tickets
GROUP BY priority
ORDER BY total DESC, priority;
