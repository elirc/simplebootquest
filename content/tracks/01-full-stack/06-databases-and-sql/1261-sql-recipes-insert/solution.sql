INSERT INTO recipes (id, name, calories, minutes, difficulty, cuisine, vegetarian)
VALUES (100, 'New recipe', 467, 10, 'easy', 'italian', 0);

SELECT COUNT(*) AS total FROM recipes WHERE difficulty = 'easy';
