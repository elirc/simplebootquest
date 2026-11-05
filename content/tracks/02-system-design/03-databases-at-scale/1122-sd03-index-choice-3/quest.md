---
slug: "sd03-index-choice-3"
title: "Design Drill: Which index? #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `tickets` table, which index best serves:\n\n```sql\nSELECT * FROM tickets WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20;\n```","options":["(created_at)","(user_id, created_at DESC)","(created_at, user_id)","(user_id) and (created_at) separately"],"answer":1},{"prompt":"On a large `cars` table, which index best serves:\n\n```sql\nSELECT * FROM cars WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20;\n```","options":["(created_at, user_id)","(user_id, created_at DESC)","(created_at)","(user_id) and (created_at) separately"],"answer":1},{"prompt":"On a large `repos` table, which index best serves:\n\n```sql\nSELECT * FROM repos WHERE open_issues BETWEEN $1 AND $2 ORDER BY open_issues;\n```","options":["a partial index WHERE open_issues IS NULL","(language)","(id, open_issues)","(open_issues)"],"answer":3},{"prompt":"On a large `cities` table, which index best serves:\n\n```sql\nSELECT * FROM cities WHERE continent = $1 AND avg_temp > $2;\n```","options":["(avg_temp)","(continent, avg_temp)","no index: the table is small enough","(avg_temp, continent)"],"answer":1},{"prompt":"On a large `tickets` table, which index best serves:\n\n```sql\nSELECT * FROM tickets WHERE priority = $1 AND age_hours > $2;\n```","options":["(age_hours)","no index: the table is small enough","(priority, age_hours)","(age_hours, priority)"],"answer":2}]
---
# Design Drill: Which index? #3

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
