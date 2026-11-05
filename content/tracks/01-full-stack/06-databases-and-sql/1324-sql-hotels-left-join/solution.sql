SELECT t.name, COUNT(ev.id) AS events
FROM hotels t
LEFT JOIN hotel_events ev ON ev.hotel_id = t.id
GROUP BY t.id, t.name
ORDER BY events DESC, t.name;
