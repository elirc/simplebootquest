SELECT t.name, COUNT(ev.id) AS events
FROM events t
LEFT JOIN event_events ev ON ev.event_id = t.id
GROUP BY t.id, t.name
ORDER BY events DESC, t.name;
