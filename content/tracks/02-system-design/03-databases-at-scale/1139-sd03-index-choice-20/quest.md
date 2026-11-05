---
slug: "sd03-index-choice-20"
title: "Design Drill: Which index? #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `tasks` table, which index best serves:\n\n```sql\nSELECT * FROM tasks WHERE assignee = $1 AND estimate > $2;\n```","options":["no index: the table is small enough","(estimate, assignee)","(estimate)","(assignee, estimate)"],"answer":3},{"prompt":"On a large `songs` table, which index best serves:\n\n```sql\nSELECT * FROM songs WHERE deleted_at IS NULL AND user_id = $1;\n```","options":["a full-text index","(deleted_at)","a partial index on (user_id) WHERE deleted_at IS NULL","(deleted_at, user_id)"],"answer":2},{"prompt":"On a large `orders` table, which index best serves:\n\n```sql\nSELECT * FROM orders WHERE country = $1 AND total_cents > $2;\n```","options":["(country, total_cents)","(total_cents, country)","no index: the table is small enough","(total_cents)"],"answer":0},{"prompt":"On a large `employees` table, which index best serves:\n\n```sql\nSELECT * FROM employees WHERE lower(email) = lower($1);\n```","options":["an expression index on (lower(email))","(email DESC)","a hash of the whole row","(email)"],"answer":0},{"prompt":"On a large `products` table, which index best serves:\n\n```sql\nSELECT * FROM products WHERE deleted_at IS NULL AND user_id = $1;\n```","options":["(deleted_at)","(deleted_at, user_id)","a full-text index","a partial index on (user_id) WHERE deleted_at IS NULL"],"answer":3}]
---
# Design Drill: Which index? #20

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
