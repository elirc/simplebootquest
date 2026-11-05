SELECT subject
FROM tickets
WHERE replies BETWEEN 4 AND 8
ORDER BY replies, subject;
