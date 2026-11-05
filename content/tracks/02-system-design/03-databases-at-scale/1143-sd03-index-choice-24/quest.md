---
slug: "sd03-index-choice-24"
title: "Design Drill: Which index? #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"On a large `flights` table, which index best serves:\n\n```sql\nSELECT * FROM flights WHERE delay_min BETWEEN $1 AND $2 ORDER BY delay_min;\n```","options":["(id, delay_min)","(delay_min)","a partial index WHERE delay_min IS NULL","(airline)"],"answer":1},{"prompt":"On a large `products` table, which index best serves:\n\n```sql\nSELECT * FROM products WHERE user_id = $1 ORDER BY created_at DESC LIMIT 20;\n```","options":["(user_id, created_at DESC)","(created_at)","(created_at, user_id)","(user_id) and (created_at) separately"],"answer":0},{"prompt":"On a large `products` table, which index best serves:\n\n```sql\nSELECT * FROM products WHERE category = $1 AND stock > $2;\n```","options":["no index: the table is small enough","(stock, category)","(category, stock)","(stock)"],"answer":2},{"prompt":"On a large `tickets` table, which index best serves:\n\n```sql\nSELECT * FROM tickets WHERE channel = $1 AND replies > $2;\n```","options":["(replies)","(channel, replies)","(replies, channel)","no index: the table is small enough"],"answer":1},{"prompt":"On a large `cars` table, which index best serves:\n\n```sql\nSELECT * FROM cars WHERE price_k BETWEEN $1 AND $2 ORDER BY price_k;\n```","options":["(fuel)","(price_k)","a partial index WHERE price_k IS NULL","(id, price_k)"],"answer":1}]
---
# Design Drill: Which index? #24

Composite indexes follow the **leftmost-prefix** rule: an index on `(a, b)` serves `WHERE a = ?` and `WHERE a = ? ORDER BY b`, but not `WHERE b = ?` on its own.
