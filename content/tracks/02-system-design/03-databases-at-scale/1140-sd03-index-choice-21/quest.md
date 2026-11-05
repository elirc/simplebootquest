---
slug: "sd03-index-choice-21"
title: "Design Drill: Which index? #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `flights` table, which index best serves:\n\n```sql\nSELECT * FROM flights WHERE airline = $1 AND delay_min > $2;\n```","options":["(delay_min, airline)","(delay_min)","no index: the table is small enough","(airline, delay_min)"],"answer":3},{"prompt":"On a large `cities` table, which index best serves:\n\n```sql\nSELECT * FROM cities WHERE lower(email) = lower($1);\n```","options":["(email)","an expression index on (lower(email))","a hash of the whole row","(email DESC)"],"answer":1},{"prompt":"On a large `songs` table, which index best serves:\n\n```sql\nSELECT * FROM songs WHERE mood = $1 AND seconds > $2;\n```","options":["(seconds)","(mood, seconds)","no index: the table is small enough","(seconds, mood)"],"answer":1},{"prompt":"On a large `courses` table, which index best serves:\n\n```sql\nSELECT * FROM courses WHERE lessons BETWEEN $1 AND $2 ORDER BY lessons;\n```","options":["a partial index WHERE lessons IS NULL","(level)","(id, lessons)","(lessons)"],"answer":3},{"prompt":"On a large `songs` table, which index best serves:\n\n```sql\nSELECT * FROM songs WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20;\n```","options":["(created_at)","(user_id) and (created_at) separately","(user_id, created_at DESC)","(created_at, user_id)"],"answer":2}]
---
# Design Drill: Which index? #21

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
