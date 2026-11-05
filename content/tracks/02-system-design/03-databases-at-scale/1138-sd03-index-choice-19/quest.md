---
slug: "sd03-index-choice-19"
title: "Design Drill: Which index? #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `books` table, which index best serves:\n\n```sql\nSELECT * FROM books WHERE lower(email) = lower($1);\n```","options":["a hash of the whole row","an expression index on (lower(email))","(email DESC)","(email)"],"answer":1},{"prompt":"On a large `repos` table, which index best serves:\n\n```sql\nSELECT * FROM repos WHERE language = $1 AND stars > $2;\n```","options":["(stars, language)","(language, stars)","(stars)","no index: the table is small enough"],"answer":1},{"prompt":"On a large `employees` table, which index best serves:\n\n```sql\nSELECT * FROM employees WHERE deleted_at IS NULL AND user_id = $1;\n```","options":["(deleted_at)","a partial index on (user_id) WHERE deleted_at IS NULL","(deleted_at, user_id)","a full-text index"],"answer":1},{"prompt":"On a large `transactions` table, which index best serves:\n\n```sql\nSELECT * FROM transactions WHERE category = $1 AND day > $2;\n```","options":["no index: the table is small enough","(day)","(category, day)","(day, category)"],"answer":2},{"prompt":"On a large `cars` table, which index best serves:\n\n```sql\nSELECT * FROM cars WHERE year BETWEEN $1 AND $2 ORDER BY year;\n```","options":["(id, year)","a partial index WHERE year IS NULL","(year)","(fuel)"],"answer":2}]
---
# Design Drill: Which index? #19

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
