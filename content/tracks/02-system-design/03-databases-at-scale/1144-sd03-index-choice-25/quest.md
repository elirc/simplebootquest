---
slug: "sd03-index-choice-25"
title: "Design Drill: Which index? #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `orders` table, which index best serves:\n\n```sql\nSELECT * FROM orders WHERE total_cents BETWEEN $1 AND $2 ORDER BY total_cents;\n```","options":["(id, total_cents)","a partial index WHERE total_cents IS NULL","(total_cents)","(status)"],"answer":2},{"prompt":"On a large `cars` table, which index best serves:\n\n```sql\nSELECT * FROM cars WHERE fuel = $1 AND km > $2;\n```","options":["(fuel, km)","no index: the table is small enough","(km)","(km, fuel)"],"answer":0},{"prompt":"On a large `songs` table, which index best serves:\n\n```sql\nSELECT * FROM songs WHERE artist = $1 AND seconds > $2;\n```","options":["(seconds)","(seconds, artist)","no index: the table is small enough","(artist, seconds)"],"answer":3},{"prompt":"On a large `transactions` table, which index best serves:\n\n```sql\nSELECT * FROM transactions WHERE day BETWEEN $1 AND $2 ORDER BY day;\n```","options":["(id, day)","a partial index WHERE day IS NULL","(day)","(category)"],"answer":2},{"prompt":"On a large `courses` table, which index best serves:\n\n```sql\nSELECT * FROM courses WHERE lower(email) = lower($1);\n```","options":["(email DESC)","a hash of the whole row","(email)","an expression index on (lower(email))"],"answer":3}]
---
# Design Drill: Which index? #25

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
