INSERT INTO students (id, name, age, score, course, graduated)
VALUES (100, 'New student', 26, 31, 'data', 0);

SELECT COUNT(*) AS total FROM students WHERE course = 'data';
