SELECT t.name, SUM(ev.amount) AS total
FROM cities t
JOIN city_events ev ON ev.city_id = t.id
GROUP BY t.id, t.name
ORDER BY total DESC, t.name;
