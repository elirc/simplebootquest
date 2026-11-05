---
slug: "sd04-effective-latency-7"
title: "Design Drill: Effective latency with a cache #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **2 ms** and the database in **310 ms**. With a **98% hit ratio**, what's the average latency?","options":["2 ms","8.2 ms","303.8 ms","156 ms"],"answer":1,"explanation":"0.98 × 2 + 0.02 × (2 + 310) = 8.2 ms."},{"prompt":"A cache answers in **5 ms** and the database in **310 ms**. With a **95% hit ratio**, what's the average latency?","options":["20.3 ms","5 ms","20.5 ms","294.5 ms"],"answer":2,"explanation":"0.95 × 5 + 0.05 × (5 + 310) = 20.5 ms."},{"prompt":"A cache answers in **2 ms** and the database in **330 ms**. With a **90% hit ratio**, what's the average latency?","options":["34.8 ms","2 ms","297 ms","35 ms"],"answer":3,"explanation":"0.9 × 2 + 0.1 × (2 + 330) = 35 ms."},{"prompt":"A cache answers in **3 ms** and the database in **320 ms**. With a **95% hit ratio**, what's the average latency?","options":["3 ms","19 ms","18.9 ms","304 ms"],"answer":1,"explanation":"0.95 × 3 + 0.05 × (3 + 320) = 19 ms."},{"prompt":"A cache answers in **4 ms** and the database in **250 ms**. With a **95% hit ratio**, what's the average latency?","options":["4 ms","16.5 ms","237.5 ms","16.3 ms"],"answer":1,"explanation":"0.95 × 4 + 0.05 × (4 + 250) = 16.5 ms."}]
---
# Design Drill: Effective latency with a cache #7

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
