---
slug: "sd03-index-choice-10"
title: "Design Drill: Which index? #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `books` table, which index best serves:\n\n```sql\nSELECT * FROM books WHERE genre = $1 AND year > $2;\n```","options":["(year, genre)","(year)","no index: the table is small enough","(genre, year)"],"answer":3},{"prompt":"On a large `products` table, which index best serves:\n\n```sql\nSELECT * FROM products WHERE lower(email) = lower($1);\n```","options":["(email DESC)","(email)","a hash of the whole row","an expression index on (lower(email))"],"answer":3},{"prompt":"On a large `plants` table, which index best serves:\n\n```sql\nSELECT * FROM plants WHERE lower(email) = lower($1);\n```","options":["(email)","(email DESC)","an expression index on (lower(email))","a hash of the whole row"],"answer":2},{"prompt":"On a large `repos` table, which index best serves:\n\n```sql\nSELECT * FROM repos WHERE lower(email) = lower($1);\n```","options":["an expression index on (lower(email))","a hash of the whole row","(email DESC)","(email)"],"answer":0},{"prompt":"On a large `songs` table, which index best serves:\n\n```sql\nSELECT * FROM songs WHERE seconds BETWEEN $1 AND $2 ORDER BY seconds;\n```","options":["(id, seconds)","(mood)","(seconds)","a partial index WHERE seconds IS NULL"],"answer":2}]
---
# Design Drill: Which index? #10

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
