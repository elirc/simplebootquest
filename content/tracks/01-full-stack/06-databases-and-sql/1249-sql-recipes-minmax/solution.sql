SELECT difficulty, MIN(calories) AS min_calories, MAX(calories) AS max_calories
FROM recipes
GROUP BY difficulty
ORDER BY difficulty;
