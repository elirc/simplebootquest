SELECT priority, MIN(replies) AS min_replies, MAX(replies) AS max_replies
FROM tickets
GROUP BY priority
ORDER BY priority;
