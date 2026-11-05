SELECT name
FROM recipes t
WHERE NOT EXISTS (SELECT 1 FROM recipe_events ev WHERE ev.recipe_id = t.id)
ORDER BY name;
