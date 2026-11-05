---
slug: "sd04-effective-latency-36"
title: "Design Drill: Effective latency with a cache #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **4 ms** and the database in **220 ms**. With a **98% hit ratio**, what's the average latency?","options":["4 ms","215.6 ms","8.4 ms","8.3 ms"],"answer":2,"explanation":"0.98 × 4 + 0.02 × (4 + 220) = 8.4 ms."},{"prompt":"A cache answers in **4 ms** and the database in **340 ms**. With a **95% hit ratio**, what's the average latency?","options":["4 ms","20.8 ms","21 ms","323 ms"],"answer":2,"explanation":"0.95 × 4 + 0.05 × (4 + 340) = 21 ms."},{"prompt":"A cache answers in **1 ms** and the database in **90 ms**. With a **75% hit ratio**, what's the average latency?","options":["67.5 ms","1 ms","23.3 ms","23.5 ms"],"answer":3,"explanation":"0.75 × 1 + 0.25 × (1 + 90) = 23.5 ms."},{"prompt":"A cache answers in **2 ms** and the database in **380 ms**. With a **60% hit ratio**, what's the average latency?","options":["154 ms","228 ms","153.2 ms","2 ms"],"answer":0,"explanation":"0.6 × 2 + 0.4 × (2 + 380) = 154 ms."},{"prompt":"A cache answers in **1 ms** and the database in **240 ms**. With a **95% hit ratio**, what's the average latency?","options":["13 ms","120.5 ms","228 ms","1 ms"],"answer":0,"explanation":"0.95 × 1 + 0.05 × (1 + 240) = 13 ms."}]
---
# Design Drill: Effective latency with a cache #36

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
