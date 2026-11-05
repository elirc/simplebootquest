---
slug: "sd03-index-choice-30"
title: "Design Drill: Which index? #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `tickets` table, which index best serves:\n\n```sql\nSELECT * FROM tickets WHERE priority = $1 AND replies > $2;\n```","options":["(replies)","(replies, priority)","no index: the table is small enough","(priority, replies)"],"answer":3},{"prompt":"On a large `courses` table, which index best serves:\n\n```sql\nSELECT * FROM courses WHERE enrolled BETWEEN $1 AND $2 ORDER BY enrolled;\n```","options":["(id, enrolled)","(enrolled)","(level)","a partial index WHERE enrolled IS NULL"],"answer":1},{"prompt":"On a large `plants` table, which index best serves:\n\n```sql\nSELECT * FROM plants WHERE height_cm BETWEEN $1 AND $2 ORDER BY height_cm;\n```","options":["(id, height_cm)","a partial index WHERE height_cm IS NULL","(light)","(height_cm)"],"answer":3},{"prompt":"On a large `orders` table, which index best serves:\n\n```sql\nSELECT * FROM orders WHERE status = $1 AND items > $2;\n```","options":["(status, items)","(items, status)","(items)","no index: the table is small enough"],"answer":0},{"prompt":"On a large `courses` table, which index best serves:\n\n```sql\nSELECT * FROM courses WHERE level = $1 AND enrolled > $2;\n```","options":["no index: the table is small enough","(enrolled, level)","(enrolled)","(level, enrolled)"],"answer":3}]
---
# Design Drill: Which index? #30

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
