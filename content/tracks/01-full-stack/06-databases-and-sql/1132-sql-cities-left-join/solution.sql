SELECT t.name, COUNT(ev.id) AS events
FROM cities t
LEFT JOIN city_events ev ON ev.city_id = t.id
GROUP BY t.id, t.name
ORDER BY events DESC, t.name;
