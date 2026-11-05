---
slug: "sd03-index-choice-17"
title: "Design Drill: Which index? #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `tasks` table, which index best serves:\n\n```sql\nSELECT * FROM tasks WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20;\n```","options":["(user_id) and (created_at) separately","(user_id, created_at DESC)","(created_at, user_id)","(created_at)"],"answer":1},{"prompt":"On a large `tasks` table, which index best serves:\n\n```sql\nSELECT * FROM tasks WHERE estimate BETWEEN $1 AND $2 ORDER BY estimate;\n```","options":["(id, estimate)","(estimate)","(status)","a partial index WHERE estimate IS NULL"],"answer":1},{"prompt":"On a large `tasks` table, which index best serves:\n\n```sql\nSELECT * FROM tasks WHERE deleted_at IS NULL AND user_id = $1;\n```","options":["a partial index on (user_id) WHERE deleted_at IS NULL","(deleted_at)","(deleted_at, user_id)","a full-text index"],"answer":0},{"prompt":"On a large `products` table, which index best serves:\n\n```sql\nSELECT * FROM products WHERE stock BETWEEN $1 AND $2 ORDER BY stock;\n```","options":["(stock)","(category)","a partial index WHERE stock IS NULL","(id, stock)"],"answer":0},{"prompt":"On a large `tasks` table, which index best serves:\n\n```sql\nSELECT * FROM tasks WHERE lower(email) = lower($1);\n```","options":["(email)","a hash of the whole row","(email DESC)","an expression index on (lower(email))"],"answer":3}]
---
# Design Drill: Which index? #17

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
