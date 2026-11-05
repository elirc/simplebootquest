SELECT priority, ROUND(AVG(replies), 1) AS avg_replies
FROM tickets
GROUP BY priority
ORDER BY priority;
