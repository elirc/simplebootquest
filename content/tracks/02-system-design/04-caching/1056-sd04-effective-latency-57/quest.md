---
slug: "sd04-effective-latency-57"
title: "Design Drill: Effective latency with a cache #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **4 ms** and the database in **130 ms**. With a **95% hit ratio**, what's the average latency?","options":["10.5 ms","10.3 ms","4 ms","123.5 ms"],"answer":0,"explanation":"0.95 × 4 + 0.05 × (4 + 130) = 10.5 ms."},{"prompt":"A cache answers in **2 ms** and the database in **110 ms**. With a **85% hit ratio**, what's the average latency?","options":["93.5 ms","18.5 ms","2 ms","18.2 ms"],"answer":1,"explanation":"0.85 × 2 + 0.15 × (2 + 110) = 18.5 ms."},{"prompt":"A cache answers in **4 ms** and the database in **130 ms**. With a **90% hit ratio**, what's the average latency?","options":["16.6 ms","17 ms","4 ms","117 ms"],"answer":1,"explanation":"0.9 × 4 + 0.1 × (4 + 130) = 17 ms."},{"prompt":"A cache answers in **4 ms** and the database in **200 ms**. With a **75% hit ratio**, what's the average latency?","options":["54 ms","150 ms","4 ms","53 ms"],"answer":0,"explanation":"0.75 × 4 + 0.25 × (4 + 200) = 54 ms."},{"prompt":"A cache answers in **4 ms** and the database in **410 ms**. With a **75% hit ratio**, what's the average latency?","options":["106.5 ms","105.5 ms","307.5 ms","4 ms"],"answer":0,"explanation":"0.75 × 4 + 0.25 × (4 + 410) = 106.5 ms."}]
---
# Design Drill: Effective latency with a cache #57

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
