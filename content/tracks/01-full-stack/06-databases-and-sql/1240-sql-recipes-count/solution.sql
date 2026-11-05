SELECT difficulty, COUNT(*) AS total
FROM recipes
GROUP BY difficulty
ORDER BY total DESC, difficulty;
