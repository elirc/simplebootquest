SELECT subject, replies
FROM tickets
WHERE replies > 5
ORDER BY replies DESC, subject;
