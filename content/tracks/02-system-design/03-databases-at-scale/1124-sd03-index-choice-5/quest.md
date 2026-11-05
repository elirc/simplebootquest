---
slug: "sd03-index-choice-5"
title: "Design Drill: Which index? #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `flights` table, which index best serves:\n\n```sql\nSELECT * FROM flights WHERE lower(email) = lower($1);\n```","options":["(email)","an expression index on (lower(email))","(email DESC)","a hash of the whole row"],"answer":1},{"prompt":"On a large `cars` table, which index best serves:\n\n```sql\nSELECT * FROM cars WHERE deleted_at IS NULL AND user_id = $1;\n```","options":["a partial index on (user_id) WHERE deleted_at IS NULL","a full-text index","(deleted_at, user_id)","(deleted_at)"],"answer":0},{"prompt":"On a large `recipes` table, which index best serves:\n\n```sql\nSELECT * FROM recipes WHERE lower(email) = lower($1);\n```","options":["(email DESC)","(email)","an expression index on (lower(email))","a hash of the whole row"],"answer":2},{"prompt":"On a large `movies` table, which index best serves:\n\n```sql\nSELECT * FROM movies WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20;\n```","options":["(created_at, user_id)","(user_id, created_at DESC)","(created_at)","(user_id) and (created_at) separately"],"answer":1},{"prompt":"On a large `workouts` table, which index best serves:\n\n```sql\nSELECT * FROM workouts WHERE minutes BETWEEN $1 AND $2 ORDER BY minutes;\n```","options":["a partial index WHERE minutes IS NULL","(minutes)","(id, minutes)","(kind)"],"answer":1}]
---
# Design Drill: Which index? #5

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
