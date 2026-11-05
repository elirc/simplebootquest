SELECT t.subject, COUNT(ev.id) AS events
FROM tickets t
LEFT JOIN ticket_events ev ON ev.ticket_id = t.id
GROUP BY t.id, t.subject
ORDER BY events DESC, t.subject;
