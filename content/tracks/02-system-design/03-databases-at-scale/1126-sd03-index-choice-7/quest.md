---
slug: "sd03-index-choice-7"
title: "Design Drill: Which index? #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `events` table, which index best serves:\n\n```sql\nSELECT * FROM events WHERE lower(email) = lower($1);\n```","options":["an expression index on (lower(email))","a hash of the whole row","(email)","(email DESC)"],"answer":0},{"prompt":"On a large `cars` table, which index best serves:\n\n```sql\nSELECT * FROM cars WHERE fuel = $1 AND year > $2;\n```","options":["(year)","(fuel, year)","no index: the table is small enough","(year, fuel)"],"answer":1},{"prompt":"On a large `transactions` table, which index best serves:\n\n```sql\nSELECT * FROM transactions WHERE deleted_at IS NULL AND user_id = $1;\n```","options":["a partial index on (user_id) WHERE deleted_at IS NULL","(deleted_at, user_id)","(deleted_at)","a full-text index"],"answer":0},{"prompt":"On a large `hotels` table, which index best serves:\n\n```sql\nSELECT * FROM hotels WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20;\n```","options":["(created_at, user_id)","(user_id) and (created_at) separately","(user_id, created_at DESC)","(created_at)"],"answer":2},{"prompt":"On a large `events` table, which index best serves:\n\n```sql\nSELECT * FROM events WHERE format = $1 AND capacity > $2;\n```","options":["(capacity, format)","no index: the table is small enough","(capacity)","(format, capacity)"],"answer":3}]
---
# Design Drill: Which index? #7

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
