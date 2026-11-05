---
slug: "sd03-index-choice-18"
title: "Design Drill: Which index? #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `flights` table, which index best serves:\n\n```sql\nSELECT * FROM flights WHERE airline = $1 AND duration_min > $2;\n```","options":["(airline, duration_min)","(duration_min)","(duration_min, airline)","no index: the table is small enough"],"answer":0},{"prompt":"On a large `tickets` table, which index best serves:\n\n```sql\nSELECT * FROM tickets WHERE channel = $1 AND age_hours > $2;\n```","options":["(age_hours, channel)","(age_hours)","(channel, age_hours)","no index: the table is small enough"],"answer":2},{"prompt":"On a large `transactions` table, which index best serves:\n\n```sql\nSELECT * FROM transactions WHERE lower(email) = lower($1);\n```","options":["(email DESC)","an expression index on (lower(email))","a hash of the whole row","(email)"],"answer":1},{"prompt":"On a large `repos` table, which index best serves:\n\n```sql\nSELECT * FROM repos WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20;\n```","options":["(created_at)","(user_id) and (created_at) separately","(created_at, user_id)","(user_id, created_at DESC)"],"answer":3},{"prompt":"On a large `recipes` table, which index best serves:\n\n```sql\nSELECT * FROM recipes WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20;\n```","options":["(user_id) and (created_at) separately","(created_at, user_id)","(created_at)","(user_id, created_at DESC)"],"answer":3}]
---
# Design Drill: Which index? #18

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
