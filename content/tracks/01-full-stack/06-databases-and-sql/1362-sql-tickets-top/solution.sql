SELECT subject, replies
FROM tickets
ORDER BY replies DESC, subject
LIMIT 3;
