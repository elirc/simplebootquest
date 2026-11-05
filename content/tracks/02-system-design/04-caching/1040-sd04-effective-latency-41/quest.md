---
slug: "sd04-effective-latency-41"
title: "Design Drill: Effective latency with a cache #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **3 ms** and the database in **230 ms**. With a **80% hit ratio**, what's the average latency?","options":["3 ms","48.4 ms","184 ms","49 ms"],"answer":3,"explanation":"0.8 × 3 + 0.2 × (3 + 230) = 49 ms."},{"prompt":"A cache answers in **4 ms** and the database in **280 ms**. With a **90% hit ratio**, what's the average latency?","options":["4 ms","31.6 ms","32 ms","252 ms"],"answer":2,"explanation":"0.9 × 4 + 0.1 × (4 + 280) = 32 ms."},{"prompt":"A cache answers in **2 ms** and the database in **340 ms**. With a **50% hit ratio**, what's the average latency?","options":["170 ms","172 ms","171 ms","2 ms"],"answer":1,"explanation":"0.5 × 2 + 0.5 × (2 + 340) = 172 ms."},{"prompt":"A cache answers in **3 ms** and the database in **410 ms**. With a **75% hit ratio**, what's the average latency?","options":["105.5 ms","104.8 ms","307.5 ms","3 ms"],"answer":0,"explanation":"0.75 × 3 + 0.25 × (3 + 410) = 105.5 ms."},{"prompt":"A cache answers in **1 ms** and the database in **160 ms**. With a **50% hit ratio**, what's the average latency?","options":["80.5 ms","1 ms","80 ms","81 ms"],"answer":3,"explanation":"0.5 × 1 + 0.5 × (1 + 160) = 81 ms."}]
---
# Design Drill: Effective latency with a cache #41

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
