SELECT t.model, COUNT(ev.id) AS events
FROM cars t
LEFT JOIN car_events ev ON ev.car_id = t.id
GROUP BY t.id, t.model
ORDER BY events DESC, t.model;
