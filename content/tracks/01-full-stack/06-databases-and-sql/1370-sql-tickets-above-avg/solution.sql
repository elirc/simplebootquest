SELECT subject
FROM tickets
WHERE replies > (SELECT AVG(replies) FROM tickets)
ORDER BY subject;
