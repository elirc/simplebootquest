---
slug: "sd04-effective-latency-18"
title: "Design Drill: Effective latency with a cache #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **2 ms** and the database in **450 ms**. With a **80% hit ratio**, what's the average latency?","options":["91.6 ms","92 ms","2 ms","360 ms"],"answer":1,"explanation":"0.8 × 2 + 0.2 × (2 + 450) = 92 ms."},{"prompt":"A cache answers in **4 ms** and the database in **250 ms**. With a **90% hit ratio**, what's the average latency?","options":["4 ms","225 ms","29 ms","28.6 ms"],"answer":2,"explanation":"0.9 × 4 + 0.1 × (4 + 250) = 29 ms."},{"prompt":"A cache answers in **3 ms** and the database in **360 ms**. With a **50% hit ratio**, what's the average latency?","options":["181.5 ms","180 ms","183 ms","3 ms"],"answer":2,"explanation":"0.5 × 3 + 0.5 × (3 + 360) = 183 ms."},{"prompt":"A cache answers in **5 ms** and the database in **240 ms**. With a **75% hit ratio**, what's the average latency?","options":["5 ms","63.8 ms","180 ms","65 ms"],"answer":3,"explanation":"0.75 × 5 + 0.25 × (5 + 240) = 65 ms."},{"prompt":"A cache answers in **2 ms** and the database in **310 ms**. With a **85% hit ratio**, what's the average latency?","options":["48.5 ms","263.5 ms","48.2 ms","2 ms"],"answer":0,"explanation":"0.85 × 2 + 0.15 × (2 + 310) = 48.5 ms."}]
---
# Design Drill: Effective latency with a cache #18

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
