---
slug: "sd04-effective-latency-43"
title: "Design Drill: Effective latency with a cache #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **5 ms** and the database in **130 ms**. With a **80% hit ratio**, what's the average latency?","options":["5 ms","31 ms","30 ms","104 ms"],"answer":1,"explanation":"0.8 × 5 + 0.2 × (5 + 130) = 31 ms."},{"prompt":"A cache answers in **4 ms** and the database in **100 ms**. With a **80% hit ratio**, what's the average latency?","options":["24 ms","80 ms","23.2 ms","4 ms"],"answer":0,"explanation":"0.8 × 4 + 0.2 × (4 + 100) = 24 ms."},{"prompt":"A cache answers in **3 ms** and the database in **100 ms**. With a **85% hit ratio**, what's the average latency?","options":["3 ms","17.6 ms","85 ms","18 ms"],"answer":3,"explanation":"0.85 × 3 + 0.15 × (3 + 100) = 18 ms."},{"prompt":"A cache answers in **3 ms** and the database in **320 ms**. With a **98% hit ratio**, what's the average latency?","options":["313.6 ms","9.4 ms","9.3 ms","3 ms"],"answer":1,"explanation":"0.98 × 3 + 0.02 × (3 + 320) = 9.4 ms."},{"prompt":"A cache answers in **3 ms** and the database in **430 ms**. With a **99% hit ratio**, what's the average latency?","options":["3 ms","425.7 ms","216.5 ms","7.3 ms"],"answer":3,"explanation":"0.99 × 3 + 0.01 × (3 + 430) = 7.3 ms."}]
---
# Design Drill: Effective latency with a cache #43

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
