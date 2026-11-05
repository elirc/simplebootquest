SELECT t.name, COUNT(ev.id) AS events
FROM plants t
LEFT JOIN plant_events ev ON ev.plant_id = t.id
GROUP BY t.id, t.name
ORDER BY events DESC, t.name;
