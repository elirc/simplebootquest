CREATE TABLE workouts (
  id INTEGER PRIMARY KEY,
  label TEXT NOT NULL,
  minutes INTEGER NOT NULL,
  calories INTEGER NOT NULL,
  kind TEXT NOT NULL
);

INSERT INTO workouts (id, label, minutes, calories, kind) VALUES
  (1, 'Sat ride', 25, 629, 'strength'),
  (2, 'Sun walk', 18, 242, 'strength'),
  (3, 'Fri run', 34, 569, 'strength'),
  (4, 'Thu ride', 106, 353, 'strength'),
  (5, 'Thu yoga', 20, 787, 'strength'),
  (6, 'Wed swim', 72, 753, 'cardio'),
  (7, 'Fri yoga', 107, 168, 'cardio'),
  (8, 'Wed lift', 98, 532, 'strength'),
  (9, 'Tue swim', 85, 141, 'strength');

CREATE TABLE workout_events (
  id INTEGER PRIMARY KEY,
  workout_id INTEGER NOT NULL REFERENCES workouts(id),
  kind TEXT NOT NULL,
  amount INTEGER NOT NULL,
  day INTEGER NOT NULL
);

INSERT INTO workout_events (id, workout_id, kind, amount, day) VALUES
  (1, 1, 'share', 12, 22),
  (2, 1, 'like', 13, 17),
  (3, 1, 'view', 6, 12),
  (4, 3, 'share', 13, 4),
  (5, 5, 'share', 4, 11),
  (6, 5, 'share', 11, 7),
  (7, 6, 'share', 11, 15),
  (8, 8, 'like', 4, 22),
  (9, 8, 'view', 2, 24),
  (10, 8, 'share', 15, 4),
  (11, 9, 'share', 1, 14);
