---
slug: "sd04-effective-latency-17"
title: "Design Drill: Effective latency with a cache #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **4 ms** and the database in **500 ms**. With a **90% hit ratio**, what's the average latency?","options":["4 ms","54 ms","53.6 ms","450 ms"],"answer":1,"explanation":"0.9 × 4 + 0.1 × (4 + 500) = 54 ms."},{"prompt":"A cache answers in **5 ms** and the database in **290 ms**. With a **95% hit ratio**, what's the average latency?","options":["19.5 ms","5 ms","19.3 ms","275.5 ms"],"answer":0,"explanation":"0.95 × 5 + 0.05 × (5 + 290) = 19.5 ms."},{"prompt":"A cache answers in **5 ms** and the database in **390 ms**. With a **60% hit ratio**, what's the average latency?","options":["5 ms","159 ms","234 ms","161 ms"],"answer":3,"explanation":"0.6 × 5 + 0.4 × (5 + 390) = 161 ms."},{"prompt":"A cache answers in **1 ms** and the database in **500 ms**. With a **85% hit ratio**, what's the average latency?","options":["425 ms","75.9 ms","1 ms","76 ms"],"answer":3,"explanation":"0.85 × 1 + 0.15 × (1 + 500) = 76 ms."},{"prompt":"A cache answers in **2 ms** and the database in **30 ms**. With a **85% hit ratio**, what's the average latency?","options":["6.5 ms","2 ms","25.5 ms","6.2 ms"],"answer":0,"explanation":"0.85 × 2 + 0.15 × (2 + 30) = 6.5 ms."}]
---
# Design Drill: Effective latency with a cache #17

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
