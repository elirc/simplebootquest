CREATE TABLE courses (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  lessons INTEGER NOT NULL,
  enrolled INTEGER NOT NULL,
  level TEXT NOT NULL
);

INSERT INTO courses (id, title, lessons, enrolled, level) VALUES
  (1, 'React Basics', 43, 2242, 'beginner'),
  (2, 'Accessibility', 34, 3997, 'intermediate'),
  (3, 'Git Essentials', 45, 1184, 'advanced'),
  (4, 'Node APIs', 34, 4079, 'intermediate'),
  (5, 'GraphQL', 19, 2467, 'beginner'),
  (6, 'CSS Layouts', 18, 4034, 'beginner'),
  (7, 'Intro to SQL', 18, 1519, 'advanced'),
  (8, 'Web Security', 46, 253, 'advanced'),
  (9, 'Testing JS', 10, 4204, 'advanced');

CREATE TABLE course_events (
  id INTEGER PRIMARY KEY,
  course_id INTEGER NOT NULL REFERENCES courses(id),
  kind TEXT NOT NULL,
  amount INTEGER NOT NULL,
  day INTEGER NOT NULL
);

INSERT INTO course_events (id, course_id, kind, amount, day) VALUES
  (1, 1, 'share', 1, 13),
  (2, 1, 'view', 19, 12),
  (3, 1, 'share', 2, 10),
  (4, 3, 'view', 9, 17),
  (5, 3, 'view', 8, 3),
  (6, 3, 'like', 1, 3),
  (7, 5, 'share', 9, 8),
  (8, 5, 'like', 3, 14),
  (9, 5, 'like', 12, 12),
  (10, 6, 'share', 15, 28),
  (11, 6, 'like', 18, 26),
  (12, 7, 'view', 9, 7),
  (13, 7, 'share', 5, 6),
  (14, 7, 'like', 20, 11),
  (15, 8, 'view', 9, 22),
  (16, 9, 'like', 14, 16),
  (17, 9, 'share', 1, 18);
