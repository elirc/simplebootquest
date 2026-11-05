SELECT difficulty, COUNT(*) AS total
FROM recipes
GROUP BY difficulty
HAVING COUNT(*) >= 2
ORDER BY difficulty;
