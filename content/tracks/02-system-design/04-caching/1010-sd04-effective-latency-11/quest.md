---
slug: "sd04-effective-latency-11"
title: "Design Drill: Effective latency with a cache #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **2 ms** and the database in **490 ms**. With a **95% hit ratio**, what's the average latency?","options":["26.5 ms","465.5 ms","26.4 ms","2 ms"],"answer":0,"explanation":"0.95 × 2 + 0.05 × (2 + 490) = 26.5 ms."},{"prompt":"A cache answers in **3 ms** and the database in **120 ms**. With a **90% hit ratio**, what's the average latency?","options":["14.7 ms","108 ms","3 ms","15 ms"],"answer":3,"explanation":"0.9 × 3 + 0.1 × (3 + 120) = 15 ms."},{"prompt":"A cache answers in **4 ms** and the database in **100 ms**. With a **99% hit ratio**, what's the average latency?","options":["5 ms","4 ms","52 ms","99 ms"],"answer":0,"explanation":"0.99 × 4 + 0.01 × (4 + 100) = 5 ms."},{"prompt":"A cache answers in **3 ms** and the database in **340 ms**. With a **85% hit ratio**, what's the average latency?","options":["3 ms","289 ms","53.6 ms","54 ms"],"answer":3,"explanation":"0.85 × 3 + 0.15 × (3 + 340) = 54 ms."},{"prompt":"A cache answers in **3 ms** and the database in **340 ms**. With a **99% hit ratio**, what's the average latency?","options":["336.6 ms","171.5 ms","3 ms","6.4 ms"],"answer":3,"explanation":"0.99 × 3 + 0.01 × (3 + 340) = 6.4 ms."}]
---
# Design Drill: Effective latency with a cache #11

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
