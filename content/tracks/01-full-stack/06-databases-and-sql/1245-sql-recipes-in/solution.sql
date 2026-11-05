SELECT id, name
FROM recipes
WHERE difficulty IN ('easy', 'hard')
ORDER BY id;
