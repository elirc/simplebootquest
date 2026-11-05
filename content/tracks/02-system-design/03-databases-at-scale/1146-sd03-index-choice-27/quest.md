---
slug: "sd03-index-choice-27"
title: "Design Drill: Which index? #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `hotels` table, which index best serves:\n\n```sql\nSELECT * FROM hotels WHERE stars BETWEEN $1 AND $2 ORDER BY stars;\n```","options":["(stars)","a partial index WHERE stars IS NULL","(id, stars)","(city)"],"answer":0},{"prompt":"On a large `songs` table, which index best serves:\n\n```sql\nSELECT * FROM songs WHERE mood = $1 AND plays > $2;\n```","options":["(mood, plays)","no index: the table is small enough","(plays)","(plays, mood)"],"answer":0},{"prompt":"On a large `tickets` table, which index best serves:\n\n```sql\nSELECT * FROM tickets WHERE replies BETWEEN $1 AND $2 ORDER BY replies;\n```","options":["(replies)","(id, replies)","(channel)","a partial index WHERE replies IS NULL"],"answer":0},{"prompt":"On a large `employees` table, which index best serves:\n\n```sql\nSELECT * FROM employees WHERE level = $1 AND salary > $2;\n```","options":["(level, salary)","(salary, level)","no index: the table is small enough","(salary)"],"answer":0},{"prompt":"On a large `repos` table, which index best serves:\n\n```sql\nSELECT * FROM repos WHERE language = $1 AND open_issues > $2;\n```","options":["(language, open_issues)","(open_issues, language)","no index: the table is small enough","(open_issues)"],"answer":0}]
---
# Design Drill: Which index? #27

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
