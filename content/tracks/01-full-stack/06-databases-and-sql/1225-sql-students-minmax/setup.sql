CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  score INTEGER NOT NULL,
  age INTEGER NOT NULL,
  course TEXT NOT NULL,
  graduated INTEGER NOT NULL
);

INSERT INTO students (id, name, score, age, course, graduated) VALUES
  (1, 'Hugo', 47, 26, 'data', 0),
  (2, 'Amara', 36, 25, 'design', 1),
  (3, 'Keiko', 40, 26, 'data', 1),
  (4, 'Dara', 62, 30, 'data', 0),
  (5, 'Ines', 96, 33, 'data', 1),
  (6, 'Luca', 77, 19, 'data', 0),
  (7, 'Jonah', 77, 18, 'design', 0),
  (8, 'Bilal', 74, 31, 'design', 0),
  (9, 'Gita', 52, 24, 'web', 1);

CREATE TABLE student_events (
  id INTEGER PRIMARY KEY,
  student_id INTEGER NOT NULL REFERENCES students(id),
  kind TEXT NOT NULL,
  amount INTEGER NOT NULL,
  day INTEGER NOT NULL
);

INSERT INTO student_events (id, student_id, kind, amount, day) VALUES
  (1, 1, 'like', 19, 17),
  (2, 1, 'like', 11, 11),
  (3, 2, 'view', 19, 18),
  (4, 3, 'share', 8, 7),
  (5, 5, 'like', 4, 21),
  (6, 5, 'view', 3, 19),
  (7, 6, 'view', 20, 10),
  (8, 6, 'share', 15, 21),
  (9, 6, 'like', 18, 22),
  (10, 7, 'view', 2, 27),
  (11, 7, 'share', 1, 28),
  (12, 7, 'view', 12, 8),
  (13, 9, 'view', 11, 15),
  (14, 9, 'share', 19, 16),
  (15, 9, 'view', 19, 10);
