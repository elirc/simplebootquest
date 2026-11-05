SELECT t.number, COUNT(ev.id) AS events
FROM flights t
LEFT JOIN flight_events ev ON ev.flight_id = t.id
GROUP BY t.id, t.number
ORDER BY events DESC, t.number;
