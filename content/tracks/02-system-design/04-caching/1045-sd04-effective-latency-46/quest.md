---
slug: "sd04-effective-latency-46"
title: "Design Drill: Effective latency with a cache #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **3 ms** and the database in **80 ms**. With a **99% hit ratio**, what's the average latency?","options":["3.8 ms","41.5 ms","3 ms","79.2 ms"],"answer":0,"explanation":"0.99 × 3 + 0.01 × (3 + 80) = 3.8 ms."},{"prompt":"A cache answers in **5 ms** and the database in **150 ms**. With a **99% hit ratio**, what's the average latency?","options":["148.5 ms","77.5 ms","5 ms","6.5 ms"],"answer":3,"explanation":"0.99 × 5 + 0.01 × (5 + 150) = 6.5 ms."},{"prompt":"A cache answers in **1 ms** and the database in **340 ms**. With a **80% hit ratio**, what's the average latency?","options":["1 ms","68.8 ms","272 ms","69 ms"],"answer":3,"explanation":"0.8 × 1 + 0.2 × (1 + 340) = 69 ms."},{"prompt":"A cache answers in **2 ms** and the database in **280 ms**. With a **90% hit ratio**, what's the average latency?","options":["29.8 ms","252 ms","30 ms","2 ms"],"answer":2,"explanation":"0.9 × 2 + 0.1 × (2 + 280) = 30 ms."},{"prompt":"A cache answers in **2 ms** and the database in **300 ms**. With a **50% hit ratio**, what's the average latency?","options":["152 ms","151 ms","2 ms","150 ms"],"answer":0,"explanation":"0.5 × 2 + 0.5 × (2 + 300) = 152 ms."}]
---
# Design Drill: Effective latency with a cache #46

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
