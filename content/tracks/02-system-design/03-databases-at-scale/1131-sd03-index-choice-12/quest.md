---
slug: "sd03-index-choice-12"
title: "Design Drill: Which index? #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `workouts` table, which index best serves:\n\n```sql\nSELECT * FROM workouts WHERE kind = $1 AND calories > $2;\n```","options":["(calories)","(kind, calories)","no index: the table is small enough","(calories, kind)"],"answer":1},{"prompt":"On a large `plants` table, which index best serves:\n\n```sql\nSELECT * FROM plants WHERE light = $1 AND height_cm > $2;\n```","options":["(height_cm, light)","no index: the table is small enough","(height_cm)","(light, height_cm)"],"answer":3},{"prompt":"On a large `students` table, which index best serves:\n\n```sql\nSELECT * FROM students WHERE deleted_at IS NULL AND user_id = $1;\n```","options":["a partial index on (user_id) WHERE deleted_at IS NULL","a full-text index","(deleted_at, user_id)","(deleted_at)"],"answer":0},{"prompt":"On a large `movies` table, which index best serves:\n\n```sql\nSELECT * FROM movies WHERE rating BETWEEN $1 AND $2 ORDER BY rating;\n```","options":["(rating)","a partial index WHERE rating IS NULL","(genre)","(id, rating)"],"answer":0},{"prompt":"On a large `employees` table, which index best serves:\n\n```sql\nSELECT * FROM employees WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20;\n```","options":["(created_at, user_id)","(created_at)","(user_id, created_at DESC)","(user_id) and (created_at) separately"],"answer":2}]
---
# Design Drill: Which index? #12

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
