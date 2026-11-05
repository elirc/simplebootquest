---
slug: "sd03-index-choice-26"
title: "Design Drill: Which index? #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `flights` table, which index best serves:\n\n```sql\nSELECT * FROM flights WHERE duration_min BETWEEN $1 AND $2 ORDER BY duration_min;\n```","options":["(duration_min)","(airline)","(id, duration_min)","a partial index WHERE duration_min IS NULL"],"answer":0},{"prompt":"On a large `events` table, which index best serves:\n\n```sql\nSELECT * FROM events WHERE capacity BETWEEN $1 AND $2 ORDER BY capacity;\n```","options":["(id, capacity)","(capacity)","(format)","a partial index WHERE capacity IS NULL"],"answer":1},{"prompt":"On a large `cities` table, which index best serves:\n\n```sql\nSELECT * FROM cities WHERE avg_temp BETWEEN $1 AND $2 ORDER BY avg_temp;\n```","options":["(avg_temp)","(id, avg_temp)","(continent)","a partial index WHERE avg_temp IS NULL"],"answer":0},{"prompt":"On a large `plants` table, which index best serves:\n\n```sql\nSELECT * FROM plants WHERE water_every_days BETWEEN $1 AND $2 ORDER BY water_every_days;\n```","options":["(id, water_every_days)","(water_every_days)","(light)","a partial index WHERE water_every_days IS NULL"],"answer":1},{"prompt":"On a large `cars` table, which index best serves:\n\n```sql\nSELECT * FROM cars WHERE km BETWEEN $1 AND $2 ORDER BY km;\n```","options":["(fuel)","a partial index WHERE km IS NULL","(id, km)","(km)"],"answer":3}]
---
# Design Drill: Which index? #26

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
