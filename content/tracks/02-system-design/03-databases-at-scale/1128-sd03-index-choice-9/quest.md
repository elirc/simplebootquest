---
slug: "sd03-index-choice-9"
title: "Design Drill: Which index? #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `movies` table, which index best serves:\n\n```sql\nSELECT * FROM movies WHERE lower(email) = lower($1);\n```","options":["an expression index on (lower(email))","(email DESC)","(email)","a hash of the whole row"],"answer":0},{"prompt":"On a large `events` table, which index best serves:\n\n```sql\nSELECT * FROM events WHERE deleted_at IS NULL AND user_id = $1;\n```","options":["a partial index on (user_id) WHERE deleted_at IS NULL","(deleted_at)","(deleted_at, user_id)","a full-text index"],"answer":0},{"prompt":"On a large `plants` table, which index best serves:\n\n```sql\nSELECT * FROM plants WHERE deleted_at IS NULL AND user_id = $1;\n```","options":["(deleted_at)","a full-text index","a partial index on (user_id) WHERE deleted_at IS NULL","(deleted_at, user_id)"],"answer":2},{"prompt":"On a large `books` table, which index best serves:\n\n```sql\nSELECT * FROM books WHERE year BETWEEN $1 AND $2 ORDER BY year;\n```","options":["(genre)","a partial index WHERE year IS NULL","(year)","(id, year)"],"answer":2},{"prompt":"On a large `tickets` table, which index best serves:\n\n```sql\nSELECT * FROM tickets WHERE age_hours BETWEEN $1 AND $2 ORDER BY age_hours;\n```","options":["(age_hours)","a partial index WHERE age_hours IS NULL","(id, age_hours)","(priority)"],"answer":0}]
---
# Design Drill: Which index? #9

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
