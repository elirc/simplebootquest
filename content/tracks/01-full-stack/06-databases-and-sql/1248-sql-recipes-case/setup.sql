CREATE TABLE recipes (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  minutes INTEGER NOT NULL,
  calories INTEGER NOT NULL,
  cuisine TEXT NOT NULL,
  difficulty TEXT NOT NULL,
  vegetarian INTEGER NOT NULL
);

INSERT INTO recipes (id, name, minutes, calories, cuisine, difficulty, vegetarian) VALUES
  (1, 'Curry', 78, 651, 'italian', 'hard', 1),
  (2, 'Pancakes', 34, 253, 'mexican', 'hard', 0),
  (3, 'Gyoza', 86, 467, 'asian', 'easy', 1),
  (4, 'Falafel', 105, 224, 'italian', 'medium', 0),
  (5, 'Shakshuka', 105, 914, 'middle-eastern', 'easy', 0),
  (6, 'Lasagne', 31, 252, 'middle-eastern', 'medium', 0),
  (7, 'Tacos', 21, 595, 'middle-eastern', 'hard', 1),
  (8, 'Chili', 67, 336, 'mexican', 'easy', 0),
  (9, 'Paella', 110, 848, 'mexican', 'easy', 1);

CREATE TABLE recipe_events (
  id INTEGER PRIMARY KEY,
  recipe_id INTEGER NOT NULL REFERENCES recipes(id),
  kind TEXT NOT NULL,
  amount INTEGER NOT NULL,
  day INTEGER NOT NULL
);

INSERT INTO recipe_events (id, recipe_id, kind, amount, day) VALUES
  (1, 1, 'share', 3, 10),
  (2, 2, 'view', 5, 17),
  (3, 2, 'share', 18, 27),
  (4, 2, 'view', 11, 16),
  (5, 4, 'like', 4, 17),
  (6, 5, 'view', 5, 6),
  (7, 5, 'view', 20, 5),
  (8, 6, 'view', 10, 2),
  (9, 7, 'view', 6, 3),
  (10, 8, 'share', 19, 20),
  (11, 8, 'share', 18, 26),
  (12, 8, 'like', 14, 4);
