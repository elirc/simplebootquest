INSERT INTO workouts (id, label, minutes, calories, kind)
VALUES (100, 'New workout', 72, 80, 'cardio');

SELECT COUNT(*) AS total FROM workouts WHERE kind = 'cardio';
