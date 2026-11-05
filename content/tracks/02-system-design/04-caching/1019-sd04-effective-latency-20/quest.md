---
slug: "sd04-effective-latency-20"
title: "Design Drill: Effective latency with a cache #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **5 ms** and the database in **220 ms**. With a **90% hit ratio**, what's the average latency?","options":["26.5 ms","27 ms","5 ms","198 ms"],"answer":1,"explanation":"0.9 × 5 + 0.1 × (5 + 220) = 27 ms."},{"prompt":"A cache answers in **2 ms** and the database in **160 ms**. With a **80% hit ratio**, what's the average latency?","options":["128 ms","33.6 ms","2 ms","34 ms"],"answer":3,"explanation":"0.8 × 2 + 0.2 × (2 + 160) = 34 ms."},{"prompt":"A cache answers in **5 ms** and the database in **420 ms**. With a **98% hit ratio**, what's the average latency?","options":["13.3 ms","411.6 ms","5 ms","13.4 ms"],"answer":3,"explanation":"0.98 × 5 + 0.02 × (5 + 420) = 13.4 ms."},{"prompt":"A cache answers in **3 ms** and the database in **100 ms**. With a **98% hit ratio**, what's the average latency?","options":["4.9 ms","98 ms","5 ms","3 ms"],"answer":2,"explanation":"0.98 × 3 + 0.02 × (3 + 100) = 5 ms."},{"prompt":"A cache answers in **3 ms** and the database in **500 ms**. With a **80% hit ratio**, what's the average latency?","options":["102.4 ms","400 ms","3 ms","103 ms"],"answer":3,"explanation":"0.8 × 3 + 0.2 × (3 + 500) = 103 ms."}]
---
# Design Drill: Effective latency with a cache #20

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
