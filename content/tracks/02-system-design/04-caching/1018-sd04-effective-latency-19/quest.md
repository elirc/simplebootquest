---
slug: "sd04-effective-latency-19"
title: "Design Drill: Effective latency with a cache #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **2 ms** and the database in **380 ms**. With a **98% hit ratio**, what's the average latency?","options":["2 ms","191 ms","372.4 ms","9.6 ms"],"answer":3,"explanation":"0.98 × 2 + 0.02 × (2 + 380) = 9.6 ms."},{"prompt":"A cache answers in **5 ms** and the database in **500 ms**. With a **99% hit ratio**, what's the average latency?","options":["5 ms","10 ms","252.5 ms","495 ms"],"answer":1,"explanation":"0.99 × 5 + 0.01 × (5 + 500) = 10 ms."},{"prompt":"A cache answers in **3 ms** and the database in **90 ms**. With a **98% hit ratio**, what's the average latency?","options":["4.8 ms","4.7 ms","3 ms","88.2 ms"],"answer":0,"explanation":"0.98 × 3 + 0.02 × (3 + 90) = 4.8 ms."},{"prompt":"A cache answers in **1 ms** and the database in **300 ms**. With a **50% hit ratio**, what's the average latency?","options":["150.5 ms","1 ms","150 ms","151 ms"],"answer":3,"explanation":"0.5 × 1 + 0.5 × (1 + 300) = 151 ms."},{"prompt":"A cache answers in **4 ms** and the database in **80 ms**. With a **95% hit ratio**, what's the average latency?","options":["7.8 ms","76 ms","8 ms","4 ms"],"answer":2,"explanation":"0.95 × 4 + 0.05 × (4 + 80) = 8 ms."}]
---
# Design Drill: Effective latency with a cache #19

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
