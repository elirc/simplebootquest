SELECT t.name, SUM(ev.amount) AS total
FROM events t
JOIN event_events ev ON ev.event_id = t.id
GROUP BY t.id, t.name
ORDER BY total DESC, t.name;
