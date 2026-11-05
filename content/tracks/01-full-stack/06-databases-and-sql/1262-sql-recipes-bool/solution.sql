SELECT difficulty, SUM(CASE WHEN vegetarian = 1 THEN 1 ELSE 0 END) AS total
FROM recipes
GROUP BY difficulty
ORDER BY difficulty;
