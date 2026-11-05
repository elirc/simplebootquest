---
slug: "sd03-index-choice-6"
title: "Design Drill: Which index? #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `orders` table, which index best serves:\n\n```sql\nSELECT * FROM orders WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20;\n```","options":["(user_id, created_at DESC)","(user_id) and (created_at) separately","(created_at)","(created_at, user_id)"],"answer":0},{"prompt":"On a large `transactions` table, which index best serves:\n\n```sql\nSELECT * FROM transactions WHERE category = $1 AND amount > $2;\n```","options":["(amount)","(amount, category)","(category, amount)","no index: the table is small enough"],"answer":2},{"prompt":"On a large `students` table, which index best serves:\n\n```sql\nSELECT * FROM students WHERE lower(email) = lower($1);\n```","options":["(email DESC)","(email)","a hash of the whole row","an expression index on (lower(email))"],"answer":3},{"prompt":"On a large `cities` table, which index best serves:\n\n```sql\nSELECT * FROM cities WHERE deleted_at IS NULL AND user_id = $1;\n```","options":["(deleted_at)","(deleted_at, user_id)","a partial index on (user_id) WHERE deleted_at IS NULL","a full-text index"],"answer":2},{"prompt":"On a large `employees` table, which index best serves:\n\n```sql\nSELECT * FROM employees WHERE level = $1 AND years_at_company > $2;\n```","options":["no index: the table is small enough","(level, years_at_company)","(years_at_company, level)","(years_at_company)"],"answer":1}]
---
# Design Drill: Which index? #6

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
