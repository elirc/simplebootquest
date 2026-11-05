SELECT t.subject,
  SUM(CASE WHEN ev.kind = 'view' THEN 1 ELSE 0 END) AS views,
  SUM(CASE WHEN ev.kind = 'like' THEN 1 ELSE 0 END) AS likes,
  SUM(CASE WHEN ev.kind = 'share' THEN 1 ELSE 0 END) AS shares
FROM tickets t
JOIN ticket_events ev ON ev.ticket_id = t.id
GROUP BY t.id, t.subject
ORDER BY t.subject;
