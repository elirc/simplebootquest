---
slug: "sd03-index-choice-16"
title: "Design Drill: Which index? #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `songs` table, which index best serves:\n\n```sql\nSELECT * FROM songs WHERE plays BETWEEN $1 AND $2 ORDER BY plays;\n```","options":["a partial index WHERE plays IS NULL","(plays)","(id, plays)","(mood)"],"answer":1},{"prompt":"On a large `tickets` table, which index best serves:\n\n```sql\nSELECT * FROM tickets WHERE deleted_at IS NULL AND user_id = $1;\n```","options":["(deleted_at)","(deleted_at, user_id)","a partial index on (user_id) WHERE deleted_at IS NULL","a full-text index"],"answer":2},{"prompt":"On a large `hotels` table, which index best serves:\n\n```sql\nSELECT * FROM hotels WHERE city = $1 AND stars > $2;\n```","options":["(stars, city)","(stars)","(city, stars)","no index: the table is small enough"],"answer":2},{"prompt":"On a large `movies` table, which index best serves:\n\n```sql\nSELECT * FROM movies WHERE genre = $1 AND rating > $2;\n```","options":["(rating, genre)","(rating)","no index: the table is small enough","(genre, rating)"],"answer":3},{"prompt":"On a large `tasks` table, which index best serves:\n\n```sql\nSELECT * FROM tasks WHERE assignee = $1 AND priority > $2;\n```","options":["(priority, assignee)","(assignee, priority)","no index: the table is small enough","(priority)"],"answer":1}]
---
# Design Drill: Which index? #16

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
