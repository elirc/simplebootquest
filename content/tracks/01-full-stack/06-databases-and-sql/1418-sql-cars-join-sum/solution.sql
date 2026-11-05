SELECT t.model, SUM(ev.amount) AS total
FROM cars t
JOIN car_events ev ON ev.car_id = t.id
GROUP BY t.id, t.model
ORDER BY total DESC, t.model;
