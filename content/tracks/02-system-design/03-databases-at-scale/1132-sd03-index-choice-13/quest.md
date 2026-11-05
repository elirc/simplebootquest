---
slug: "sd03-index-choice-13"
title: "Design Drill: Which index? #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `students` table, which index best serves:\n\n```sql\nSELECT * FROM students WHERE age BETWEEN $1 AND $2 ORDER BY age;\n```","options":["(age)","a partial index WHERE age IS NULL","(course)","(id, age)"],"answer":0},{"prompt":"On a large `orders` table, which index best serves:\n\n```sql\nSELECT * FROM orders WHERE lower(email) = lower($1);\n```","options":["(email)","(email DESC)","a hash of the whole row","an expression index on (lower(email))"],"answer":3},{"prompt":"On a large `cities` table, which index best serves:\n\n```sql\nSELECT * FROM cities WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20;\n```","options":["(created_at)","(user_id) and (created_at) separately","(user_id, created_at DESC)","(created_at, user_id)"],"answer":2},{"prompt":"On a large `repos` table, which index best serves:\n\n```sql\nSELECT * FROM repos WHERE stars BETWEEN $1 AND $2 ORDER BY stars;\n```","options":["a partial index WHERE stars IS NULL","(language)","(stars)","(id, stars)"],"answer":2},{"prompt":"On a large `employees` table, which index best serves:\n\n```sql\nSELECT * FROM employees WHERE salary BETWEEN $1 AND $2 ORDER BY salary;\n```","options":["(id, salary)","(salary)","(level)","a partial index WHERE salary IS NULL"],"answer":1}]
---
# Design Drill: Which index? #13

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
