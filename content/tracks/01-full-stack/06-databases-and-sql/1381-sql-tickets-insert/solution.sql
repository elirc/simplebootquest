INSERT INTO tickets (id, subject, replies, age_hours, priority, channel, resolved)
VALUES (100, 'New ticket', 5, 1, 'low', 'email', 0);

SELECT COUNT(*) AS total FROM tickets WHERE priority = 'low';
