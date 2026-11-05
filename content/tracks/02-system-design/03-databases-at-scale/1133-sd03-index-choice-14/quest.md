---
slug: "sd03-index-choice-14"
title: "Design Drill: Which index? #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `tickets` table, which index best serves:\n\n```sql\nSELECT * FROM tickets WHERE lower(email) = lower($1);\n```","options":["(email DESC)","a hash of the whole row","(email)","an expression index on (lower(email))"],"answer":3},{"prompt":"On a large `workouts` table, which index best serves:\n\n```sql\nSELECT * FROM workouts WHERE deleted_at IS NULL AND user_id = $1;\n```","options":["a partial index on (user_id) WHERE deleted_at IS NULL","(deleted_at, user_id)","a full-text index","(deleted_at)"],"answer":0},{"prompt":"On a large `courses` table, which index best serves:\n\n```sql\nSELECT * FROM courses WHERE deleted_at IS NULL AND user_id = $1;\n```","options":["a partial index on (user_id) WHERE deleted_at IS NULL","(deleted_at)","a full-text index","(deleted_at, user_id)"],"answer":0},{"prompt":"On a large `transactions` table, which index best serves:\n\n```sql\nSELECT * FROM transactions WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20;\n```","options":["(user_id, created_at DESC)","(created_at)","(created_at, user_id)","(user_id) and (created_at) separately"],"answer":0},{"prompt":"On a large `workouts` table, which index best serves:\n\n```sql\nSELECT * FROM workouts WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20;\n```","options":["(created_at, user_id)","(user_id) and (created_at) separately","(user_id, created_at DESC)","(created_at)"],"answer":2}]
---
# Design Drill: Which index? #14

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
