---
slug: "sd03-index-choice-15"
title: "Design Drill: Which index? #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `hotels` table, which index best serves:\n\n```sql\nSELECT * FROM hotels WHERE deleted_at IS NULL AND user_id = $1;\n```","options":["(deleted_at, user_id)","(deleted_at)","a full-text index","a partial index on (user_id) WHERE deleted_at IS NULL"],"answer":3},{"prompt":"On a large `orders` table, which index best serves:\n\n```sql\nSELECT * FROM orders WHERE country = $1 AND items > $2;\n```","options":["(country, items)","(items)","(items, country)","no index: the table is small enough"],"answer":0},{"prompt":"On a large `flights` table, which index best serves:\n\n```sql\nSELECT * FROM flights WHERE airline = $1 AND seats > $2;\n```","options":["(airline, seats)","no index: the table is small enough","(seats, airline)","(seats)"],"answer":0},{"prompt":"On a large `movies` table, which index best serves:\n\n```sql\nSELECT * FROM movies WHERE deleted_at IS NULL AND user_id = $1;\n```","options":["(deleted_at)","(deleted_at, user_id)","a partial index on (user_id) WHERE deleted_at IS NULL","a full-text index"],"answer":2},{"prompt":"On a large `events` table, which index best serves:\n\n```sql\nSELECT * FROM events WHERE format = $1 AND registered > $2;\n```","options":["(format, registered)","(registered)","no index: the table is small enough","(registered, format)"],"answer":0}]
---
# Design Drill: Which index? #15

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
