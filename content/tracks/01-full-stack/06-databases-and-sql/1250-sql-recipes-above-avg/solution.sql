SELECT name
FROM recipes
WHERE calories > (SELECT AVG(calories) FROM recipes)
ORDER BY name;
