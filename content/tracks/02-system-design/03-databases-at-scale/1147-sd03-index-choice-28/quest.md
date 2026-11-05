---
slug: "sd03-index-choice-28"
title: "Design Drill: Which index? #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `books` table, which index best serves:\n\n```sql\nSELECT * FROM books WHERE deleted_at IS NULL AND user_id = $1;\n```","options":["a partial index on (user_id) WHERE deleted_at IS NULL","(deleted_at, user_id)","(deleted_at)","a full-text index"],"answer":0},{"prompt":"On a large `students` table, which index best serves:\n\n```sql\nSELECT * FROM students WHERE score BETWEEN $1 AND $2 ORDER BY score;\n```","options":["(id, score)","(score)","(course)","a partial index WHERE score IS NULL"],"answer":1},{"prompt":"On a large `transactions` table, which index best serves:\n\n```sql\nSELECT * FROM transactions WHERE amount BETWEEN $1 AND $2 ORDER BY amount;\n```","options":["(id, amount)","(amount)","a partial index WHERE amount IS NULL","(category)"],"answer":1},{"prompt":"On a large `orders` table, which index best serves:\n\n```sql\nSELECT * FROM orders WHERE deleted_at IS NULL AND user_id = $1;\n```","options":["a full-text index","(deleted_at)","(deleted_at, user_id)","a partial index on (user_id) WHERE deleted_at IS NULL"],"answer":3},{"prompt":"On a large `movies` table, which index best serves:\n\n```sql\nSELECT * FROM movies WHERE genre = $1 AND minutes > $2;\n```","options":["(minutes)","(genre, minutes)","no index: the table is small enough","(minutes, genre)"],"answer":1}]
---
# Design Drill: Which index? #28

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
