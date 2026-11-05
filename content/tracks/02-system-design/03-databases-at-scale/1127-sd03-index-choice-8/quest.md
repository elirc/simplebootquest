---
slug: "sd03-index-choice-8"
title: "Design Drill: Which index? #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `recipes` table, which index best serves:\n\n```sql\nSELECT * FROM recipes WHERE deleted_at IS NULL AND user_id = $1;\n```","options":["a full-text index","(deleted_at)","a partial index on (user_id) WHERE deleted_at IS NULL","(deleted_at, user_id)"],"answer":2},{"prompt":"On a large `recipes` table, which index best serves:\n\n```sql\nSELECT * FROM recipes WHERE calories BETWEEN $1 AND $2 ORDER BY calories;\n```","options":["(calories)","(difficulty)","(id, calories)","a partial index WHERE calories IS NULL"],"answer":0},{"prompt":"On a large `events` table, which index best serves:\n\n```sql\nSELECT * FROM events WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20;\n```","options":["(user_id) and (created_at) separately","(created_at)","(user_id, created_at DESC)","(created_at, user_id)"],"answer":2},{"prompt":"On a large `plants` table, which index best serves:\n\n```sql\nSELECT * FROM plants WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20;\n```","options":["(created_at, user_id)","(user_id, created_at DESC)","(created_at)","(user_id) and (created_at) separately"],"answer":1},{"prompt":"On a large `plants` table, which index best serves:\n\n```sql\nSELECT * FROM plants WHERE light = $1 AND water_every_days > $2;\n```","options":["(light, water_every_days)","(water_every_days, light)","no index: the table is small enough","(water_every_days)"],"answer":0}]
---
# Design Drill: Which index? #8

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
