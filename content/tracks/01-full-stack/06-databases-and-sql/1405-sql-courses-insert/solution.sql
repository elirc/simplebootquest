INSERT INTO courses (id, title, enrolled, lessons, level)
VALUES (100, 'New course', 2467, 6, 'advanced');

SELECT COUNT(*) AS total FROM courses WHERE level = 'advanced';
