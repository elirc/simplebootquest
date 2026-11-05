SELECT t.name, SUM(ev.amount) AS total
FROM hotels t
JOIN hotel_events ev ON ev.hotel_id = t.id
GROUP BY t.id, t.name
ORDER BY total DESC, t.name;
