SELECT t.subject, SUM(ev.amount) AS total
FROM tickets t
JOIN ticket_events ev ON ev.ticket_id = t.id
GROUP BY t.id, t.subject
ORDER BY total DESC, t.subject;
