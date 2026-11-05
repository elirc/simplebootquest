---
slug: "sd04-effective-latency-4"
title: "Design Drill: Effective latency with a cache #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **2 ms** and the database in **140 ms**. With a **85% hit ratio**, what's the average latency?","options":["119 ms","2 ms","22.7 ms","23 ms"],"answer":3,"explanation":"0.85 × 2 + 0.15 × (2 + 140) = 23 ms."},{"prompt":"A cache answers in **2 ms** and the database in **270 ms**. With a **95% hit ratio**, what's the average latency?","options":["15.4 ms","15.5 ms","2 ms","256.5 ms"],"answer":1,"explanation":"0.95 × 2 + 0.05 × (2 + 270) = 15.5 ms."},{"prompt":"A cache answers in **1 ms** and the database in **380 ms**. With a **80% hit ratio**, what's the average latency?","options":["76.8 ms","304 ms","77 ms","1 ms"],"answer":2,"explanation":"0.8 × 1 + 0.2 × (1 + 380) = 77 ms."},{"prompt":"A cache answers in **2 ms** and the database in **220 ms**. With a **95% hit ratio**, what's the average latency?","options":["13 ms","2 ms","209 ms","12.9 ms"],"answer":0,"explanation":"0.95 × 2 + 0.05 × (2 + 220) = 13 ms."},{"prompt":"A cache answers in **2 ms** and the database in **40 ms**. With a **99% hit ratio**, what's the average latency?","options":["2 ms","39.6 ms","2.4 ms","21 ms"],"answer":2,"explanation":"0.99 × 2 + 0.01 × (2 + 40) = 2.4 ms."}]
---
# Design Drill: Effective latency with a cache #4

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
