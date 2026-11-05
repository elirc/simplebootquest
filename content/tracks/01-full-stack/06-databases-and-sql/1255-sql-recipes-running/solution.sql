SELECT id, calories,
  SUM(calories) OVER (ORDER BY id) AS running_total
FROM recipes
ORDER BY id;
