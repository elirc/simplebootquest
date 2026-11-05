---
slug: "sd03-index-choice-4"
title: "Design Drill: Which index? #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `employees` table, which index best serves:\n\n```sql\nSELECT * FROM employees WHERE team = $1 AND salary > $2;\n```","options":["(salary, team)","(salary)","no index: the table is small enough","(team, salary)"],"answer":3},{"prompt":"On a large `cars` table, which index best serves:\n\n```sql\nSELECT * FROM cars WHERE lower(email) = lower($1);\n```","options":["an expression index on (lower(email))","(email)","a hash of the whole row","(email DESC)"],"answer":0},{"prompt":"On a large `flights` table, which index best serves:\n\n```sql\nSELECT * FROM flights WHERE deleted_at IS NULL AND user_id = $1;\n```","options":["a full-text index","(deleted_at, user_id)","a partial index on (user_id) WHERE deleted_at IS NULL","(deleted_at)"],"answer":2},{"prompt":"On a large `students` table, which index best serves:\n\n```sql\nSELECT * FROM students WHERE course = $1 AND age > $2;\n```","options":["(age, course)","(course, age)","no index: the table is small enough","(age)"],"answer":1},{"prompt":"On a large `products` table, which index best serves:\n\n```sql\nSELECT * FROM products WHERE price BETWEEN $1 AND $2 ORDER BY price;\n```","options":["(category)","(id, price)","(price)","a partial index WHERE price IS NULL"],"answer":2}]
---
# Design Drill: Which index? #4

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
