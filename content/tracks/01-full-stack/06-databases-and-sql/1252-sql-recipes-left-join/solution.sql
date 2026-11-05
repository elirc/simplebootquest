SELECT t.name, COUNT(ev.id) AS events
FROM recipes t
LEFT JOIN recipe_events ev ON ev.recipe_id = t.id
GROUP BY t.id, t.name
ORDER BY events DESC, t.name;
