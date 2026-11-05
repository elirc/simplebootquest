---
slug: "sd04-effective-latency-1"
title: "Design Drill: Effective latency with a cache #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **5 ms** and the database in **90 ms**. With a **75% hit ratio**, what's the average latency?","options":["5 ms","67.5 ms","26.3 ms","27.5 ms"],"answer":3,"explanation":"0.75 × 5 + 0.25 × (5 + 90) = 27.5 ms."},{"prompt":"A cache answers in **5 ms** and the database in **90 ms**. With a **90% hit ratio**, what's the average latency?","options":["13.5 ms","81 ms","5 ms","14 ms"],"answer":3,"explanation":"0.9 × 5 + 0.1 × (5 + 90) = 14 ms."},{"prompt":"A cache answers in **3 ms** and the database in **40 ms**. With a **98% hit ratio**, what's the average latency?","options":["3.8 ms","39.2 ms","3 ms","3.7 ms"],"answer":0,"explanation":"0.98 × 3 + 0.02 × (3 + 40) = 3.8 ms."},{"prompt":"A cache answers in **5 ms** and the database in **100 ms**. With a **95% hit ratio**, what's the average latency?","options":["95 ms","5 ms","10 ms","9.8 ms"],"answer":2,"explanation":"0.95 × 5 + 0.05 × (5 + 100) = 10 ms."},{"prompt":"A cache answers in **1 ms** and the database in **330 ms**. With a **60% hit ratio**, what's the average latency?","options":["1 ms","198 ms","132.6 ms","133 ms"],"answer":3,"explanation":"0.6 × 1 + 0.4 × (1 + 330) = 133 ms."}]
---
# Design Drill: Effective latency with a cache #1

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
