---
slug: "sd04-effective-latency-5"
title: "Design Drill: Effective latency with a cache #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **3 ms** and the database in **500 ms**. With a **85% hit ratio**, what's the average latency?","options":["77.6 ms","78 ms","425 ms","3 ms"],"answer":1,"explanation":"0.85 × 3 + 0.15 × (3 + 500) = 78 ms."},{"prompt":"A cache answers in **3 ms** and the database in **370 ms**. With a **99% hit ratio**, what's the average latency?","options":["3 ms","366.3 ms","186.5 ms","6.7 ms"],"answer":3,"explanation":"0.99 × 3 + 0.01 × (3 + 370) = 6.7 ms."},{"prompt":"A cache answers in **5 ms** and the database in **400 ms**. With a **90% hit ratio**, what's the average latency?","options":["45 ms","360 ms","5 ms","44.5 ms"],"answer":0,"explanation":"0.9 × 5 + 0.1 × (5 + 400) = 45 ms."},{"prompt":"A cache answers in **2 ms** and the database in **410 ms**. With a **95% hit ratio**, what's the average latency?","options":["22.5 ms","22.4 ms","389.5 ms","2 ms"],"answer":0,"explanation":"0.95 × 2 + 0.05 × (2 + 410) = 22.5 ms."},{"prompt":"A cache answers in **3 ms** and the database in **130 ms**. With a **95% hit ratio**, what's the average latency?","options":["9.5 ms","123.5 ms","3 ms","9.4 ms"],"answer":0,"explanation":"0.95 × 3 + 0.05 × (3 + 130) = 9.5 ms."}]
---
# Design Drill: Effective latency with a cache #5

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
