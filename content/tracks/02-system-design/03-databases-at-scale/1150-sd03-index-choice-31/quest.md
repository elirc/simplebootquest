---
slug: "sd03-index-choice-31"
title: "Design Drill: Which index? #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `courses` table, which index best serves:\n\n```sql\nSELECT * FROM courses WHERE level = $1 AND lessons > $2;\n```","options":["no index: the table is small enough","(lessons)","(lessons, level)","(level, lessons)"],"answer":3},{"prompt":"On a large `tasks` table, which index best serves:\n\n```sql\nSELECT * FROM tasks WHERE status = $1 AND priority > $2;\n```","options":["no index: the table is small enough","(priority, status)","(status, priority)","(priority)"],"answer":2},{"prompt":"On a large `movies` table, which index best serves:\n\n```sql\nSELECT * FROM movies WHERE minutes BETWEEN $1 AND $2 ORDER BY minutes;\n```","options":["a partial index WHERE minutes IS NULL","(minutes)","(id, minutes)","(genre)"],"answer":1},{"prompt":"On a large `orders` table, which index best serves:\n\n```sql\nSELECT * FROM orders WHERE status = $1 AND total_cents > $2;\n```","options":["(status, total_cents)","(total_cents, status)","(total_cents)","no index: the table is small enough"],"answer":0},{"prompt":"On a large `movies` table, which index best serves:\n\n```sql\nSELECT * FROM movies WHERE genre = $1 AND year > $2;\n```","options":["(genre, year)","(year, genre)","no index: the table is small enough","(year)"],"answer":0}]
---
# Design Drill: Which index? #31

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
