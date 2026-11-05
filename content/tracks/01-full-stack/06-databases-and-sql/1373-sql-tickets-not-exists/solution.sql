SELECT subject
FROM tickets t
WHERE NOT EXISTS (SELECT 1 FROM ticket_events ev WHERE ev.ticket_id = t.id)
ORDER BY subject;
