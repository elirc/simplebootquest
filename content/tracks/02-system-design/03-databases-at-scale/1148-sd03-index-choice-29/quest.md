---
slug: "sd03-index-choice-29"
title: "Design Drill: Which index? #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `recipes` table, which index best serves:\n\n```sql\nSELECT * FROM recipes WHERE difficulty = $1 AND minutes > $2;\n```","options":["(difficulty, minutes)","(minutes, difficulty)","(minutes)","no index: the table is small enough"],"answer":0},{"prompt":"On a large `movies` table, which index best serves:\n\n```sql\nSELECT * FROM movies WHERE year BETWEEN $1 AND $2 ORDER BY year;\n```","options":["(genre)","(year)","(id, year)","a partial index WHERE year IS NULL"],"answer":1},{"prompt":"On a large `flights` table, which index best serves:\n\n```sql\nSELECT * FROM flights WHERE seats BETWEEN $1 AND $2 ORDER BY seats;\n```","options":["(seats)","a partial index WHERE seats IS NULL","(id, seats)","(airline)"],"answer":0},{"prompt":"On a large `recipes` table, which index best serves:\n\n```sql\nSELECT * FROM recipes WHERE cuisine = $1 AND minutes > $2;\n```","options":["(minutes, cuisine)","(minutes)","(cuisine, minutes)","no index: the table is small enough"],"answer":2},{"prompt":"On a large `workouts` table, which index best serves:\n\n```sql\nSELECT * FROM workouts WHERE calories BETWEEN $1 AND $2 ORDER BY calories;\n```","options":["(calories)","(id, calories)","(kind)","a partial index WHERE calories IS NULL"],"answer":0}]
---
# Design Drill: Which index? #29

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
