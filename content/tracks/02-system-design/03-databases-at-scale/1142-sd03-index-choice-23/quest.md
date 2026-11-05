---
slug: "sd03-index-choice-23"
title: "Design Drill: Which index? #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `employees` table, which index best serves:\n\n```sql\nSELECT * FROM employees WHERE team = $1 AND years_at_company > $2;\n```","options":["(team, years_at_company)","(years_at_company, team)","(years_at_company)","no index: the table is small enough"],"answer":0},{"prompt":"On a large `students` table, which index best serves:\n\n```sql\nSELECT * FROM students WHERE course = $1 AND score > $2;\n```","options":["(score, course)","(score)","(course, score)","no index: the table is small enough"],"answer":2},{"prompt":"On a large `cities` table, which index best serves:\n\n```sql\nSELECT * FROM cities WHERE continent = $1 AND population > $2;\n```","options":["(population)","(continent, population)","(population, continent)","no index: the table is small enough"],"answer":1},{"prompt":"On a large `cars` table, which index best serves:\n\n```sql\nSELECT * FROM cars WHERE fuel = $1 AND price_k > $2;\n```","options":["(price_k)","no index: the table is small enough","(fuel, price_k)","(price_k, fuel)"],"answer":2},{"prompt":"On a large `songs` table, which index best serves:\n\n```sql\nSELECT * FROM songs WHERE lower(email) = lower($1);\n```","options":["(email)","an expression index on (lower(email))","(email DESC)","a hash of the whole row"],"answer":1}]
---
# Design Drill: Which index? #23

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
