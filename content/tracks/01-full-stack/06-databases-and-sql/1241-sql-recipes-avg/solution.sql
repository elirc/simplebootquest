SELECT difficulty, ROUND(AVG(calories), 1) AS avg_calories
FROM recipes
GROUP BY difficulty
ORDER BY difficulty;
