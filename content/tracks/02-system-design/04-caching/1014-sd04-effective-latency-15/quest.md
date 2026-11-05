---
slug: "sd04-effective-latency-15"
title: "Design Drill: Effective latency with a cache #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **4 ms** and the database in **70 ms**. With a **50% hit ratio**, what's the average latency?","options":["39 ms","35 ms","4 ms","37 ms"],"answer":0,"explanation":"0.5 × 4 + 0.5 × (4 + 70) = 39 ms."},{"prompt":"A cache answers in **5 ms** and the database in **190 ms**. With a **75% hit ratio**, what's the average latency?","options":["142.5 ms","51.3 ms","52.5 ms","5 ms"],"answer":2,"explanation":"0.75 × 5 + 0.25 × (5 + 190) = 52.5 ms."},{"prompt":"A cache answers in **4 ms** and the database in **320 ms**. With a **80% hit ratio**, what's the average latency?","options":["4 ms","256 ms","67.2 ms","68 ms"],"answer":3,"explanation":"0.8 × 4 + 0.2 × (4 + 320) = 68 ms."},{"prompt":"A cache answers in **2 ms** and the database in **20 ms**. With a **98% hit ratio**, what's the average latency?","options":["2.4 ms","2 ms","19.6 ms","11 ms"],"answer":0,"explanation":"0.98 × 2 + 0.02 × (2 + 20) = 2.4 ms."},{"prompt":"A cache answers in **4 ms** and the database in **90 ms**. With a **80% hit ratio**, what's the average latency?","options":["72 ms","21.2 ms","22 ms","4 ms"],"answer":2,"explanation":"0.8 × 4 + 0.2 × (4 + 90) = 22 ms."}]
---
# Design Drill: Effective latency with a cache #15

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
