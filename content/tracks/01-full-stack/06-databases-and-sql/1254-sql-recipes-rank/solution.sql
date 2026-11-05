SELECT difficulty, name, calories,
  RANK() OVER (PARTITION BY difficulty ORDER BY calories DESC) AS rank
FROM recipes
ORDER BY difficulty, rank, name;
