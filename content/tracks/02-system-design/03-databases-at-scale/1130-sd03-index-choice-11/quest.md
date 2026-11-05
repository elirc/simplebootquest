---
slug: "sd03-index-choice-11"
title: "Design Drill: Which index? #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `hotels` table, which index best serves:\n\n```sql\nSELECT * FROM hotels WHERE lower(email) = lower($1);\n```","options":["a hash of the whole row","(email DESC)","(email)","an expression index on (lower(email))"],"answer":3},{"prompt":"On a large `products` table, which index best serves:\n\n```sql\nSELECT * FROM products WHERE category = $1 AND price > $2;\n```","options":["(category, price)","(price, category)","(price)","no index: the table is small enough"],"answer":0},{"prompt":"On a large `tasks` table, which index best serves:\n\n```sql\nSELECT * FROM tasks WHERE priority BETWEEN $1 AND $2 ORDER BY priority;\n```","options":["(priority)","(id, priority)","a partial index WHERE priority IS NULL","(assignee)"],"answer":0},{"prompt":"On a large `orders` table, which index best serves:\n\n```sql\nSELECT * FROM orders WHERE items BETWEEN $1 AND $2 ORDER BY items;\n```","options":["(country)","a partial index WHERE items IS NULL","(items)","(id, items)"],"answer":2},{"prompt":"On a large `songs` table, which index best serves:\n\n```sql\nSELECT * FROM songs WHERE artist = $1 AND plays > $2;\n```","options":["no index: the table is small enough","(plays, artist)","(artist, plays)","(plays)"],"answer":2}]
---
# Design Drill: Which index? #11

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
