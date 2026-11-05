---
slug: "sd03-index-choice-22"
title: "Design Drill: Which index? #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `hotels` table, which index best serves:\n\n```sql\nSELECT * FROM hotels WHERE nightly_price BETWEEN $1 AND $2 ORDER BY nightly_price;\n```","options":["a partial index WHERE nightly_price IS NULL","(nightly_price)","(city)","(id, nightly_price)"],"answer":1},{"prompt":"On a large `workouts` table, which index best serves:\n\n```sql\nSELECT * FROM workouts WHERE lower(email) = lower($1);\n```","options":["a hash of the whole row","(email DESC)","(email)","an expression index on (lower(email))"],"answer":3},{"prompt":"On a large `recipes` table, which index best serves:\n\n```sql\nSELECT * FROM recipes WHERE difficulty = $1 AND calories > $2;\n```","options":["(calories, difficulty)","(calories)","(difficulty, calories)","no index: the table is small enough"],"answer":2},{"prompt":"On a large `students` table, which index best serves:\n\n```sql\nSELECT * FROM students WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20;\n```","options":["(user_id, created_at DESC)","(user_id) and (created_at) separately","(created_at)","(created_at, user_id)"],"answer":0},{"prompt":"On a large `workouts` table, which index best serves:\n\n```sql\nSELECT * FROM workouts WHERE kind = $1 AND minutes > $2;\n```","options":["no index: the table is small enough","(kind, minutes)","(minutes)","(minutes, kind)"],"answer":1}]
---
# Design Drill: Which index? #22

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
