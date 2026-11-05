---
slug: "sd03-index-choice-1"
title: "Design Drill: Which index? #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `flights` table, which index best serves:\n\n```sql\nSELECT * FROM flights WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20;\n```","options":["(created_at)","(user_id, created_at DESC)","(user_id) and (created_at) separately","(created_at, user_id)"],"answer":1},{"prompt":"On a large `employees` table, which index best serves:\n\n```sql\nSELECT * FROM employees WHERE years_at_company BETWEEN $1 AND $2 ORDER BY years_at_company;\n```","options":["(team)","(id, years_at_company)","(years_at_company)","a partial index WHERE years_at_company IS NULL"],"answer":2},{"prompt":"On a large `books` table, which index best serves:\n\n```sql\nSELECT * FROM books WHERE genre = $1 AND pages > $2;\n```","options":["no index: the table is small enough","(pages, genre)","(pages)","(genre, pages)"],"answer":3},{"prompt":"On a large `repos` table, which index best serves:\n\n```sql\nSELECT * FROM repos WHERE deleted_at IS NULL AND user_id = $1;\n```","options":["a full-text index","a partial index on (user_id) WHERE deleted_at IS NULL","(deleted_at)","(deleted_at, user_id)"],"answer":1},{"prompt":"On a large `cities` table, which index best serves:\n\n```sql\nSELECT * FROM cities WHERE population BETWEEN $1 AND $2 ORDER BY population;\n```","options":["(continent)","(population)","a partial index WHERE population IS NULL","(id, population)"],"answer":1}]
---
# Design Drill: Which index? #1

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
