SELECT t.name, SUM(ev.amount) AS total
FROM recipes t
JOIN recipe_events ev ON ev.recipe_id = t.id
GROUP BY t.id, t.name
ORDER BY total DESC, t.name;
