WITH per_group AS (
  SELECT difficulty, AVG(calories) AS avg_value FROM recipes GROUP BY difficulty
)
SELECT difficulty
FROM per_group
WHERE avg_value > (SELECT AVG(calories) FROM recipes)
ORDER BY difficulty;
