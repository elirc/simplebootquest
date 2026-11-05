SELECT subject, replies, age_hours
FROM tickets
ORDER BY age_hours, replies DESC, subject;
