---
slug: "sd03-index-choice-2"
title: "Design Drill: Which index? #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `events` table, which index best serves:\n\n```sql\nSELECT * FROM events WHERE registered BETWEEN $1 AND $2 ORDER BY registered;\n```","options":["(registered)","a partial index WHERE registered IS NULL","(format)","(id, registered)"],"answer":0},{"prompt":"On a large `books` table, which index best serves:\n\n```sql\nSELECT * FROM books WHERE pages BETWEEN $1 AND $2 ORDER BY pages;\n```","options":["(id, pages)","(genre)","(pages)","a partial index WHERE pages IS NULL"],"answer":2},{"prompt":"On a large `books` table, which index best serves:\n\n```sql\nSELECT * FROM books WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20;\n```","options":["(user_id) and (created_at) separately","(user_id, created_at DESC)","(created_at, user_id)","(created_at)"],"answer":1},{"prompt":"On a large `courses` table, which index best serves:\n\n```sql\nSELECT * FROM courses WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20;\n```","options":["(created_at, user_id)","(created_at)","(user_id, created_at DESC)","(user_id) and (created_at) separately"],"answer":2},{"prompt":"On a large `hotels` table, which index best serves:\n\n```sql\nSELECT * FROM hotels WHERE city = $1 AND nightly_price > $2;\n```","options":["(nightly_price)","(nightly_price, city)","(city, nightly_price)","no index: the table is small enough"],"answer":2}]
---
# Design Drill: Which index? #2

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
