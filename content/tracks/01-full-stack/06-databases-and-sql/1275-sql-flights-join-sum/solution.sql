SELECT t.number, SUM(ev.amount) AS total
FROM flights t
JOIN flight_events ev ON ev.flight_id = t.id
GROUP BY t.id, t.number
ORDER BY total DESC, t.number;
