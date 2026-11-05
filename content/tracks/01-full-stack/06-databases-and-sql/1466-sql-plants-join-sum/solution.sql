SELECT t.name, SUM(ev.amount) AS total
FROM plants t
JOIN plant_events ev ON ev.plant_id = t.id
GROUP BY t.id, t.name
ORDER BY total DESC, t.name;
