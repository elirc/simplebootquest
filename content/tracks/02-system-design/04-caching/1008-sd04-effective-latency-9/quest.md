---
slug: "sd04-effective-latency-9"
title: "Design Drill: Effective latency with a cache #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **1 ms** and the database in **130 ms**. With a **50% hit ratio**, what's the average latency?","options":["1 ms","65 ms","66 ms","65.5 ms"],"answer":2,"explanation":"0.5 × 1 + 0.5 × (1 + 130) = 66 ms."},{"prompt":"A cache answers in **1 ms** and the database in **140 ms**. With a **99% hit ratio**, what's the average latency?","options":["1 ms","138.6 ms","2.4 ms","70.5 ms"],"answer":2,"explanation":"0.99 × 1 + 0.01 × (1 + 140) = 2.4 ms."},{"prompt":"A cache answers in **1 ms** and the database in **80 ms**. With a **95% hit ratio**, what's the average latency?","options":["76 ms","5 ms","1 ms","40.5 ms"],"answer":1,"explanation":"0.95 × 1 + 0.05 × (1 + 80) = 5 ms."},{"prompt":"A cache answers in **3 ms** and the database in **430 ms**. With a **95% hit ratio**, what's the average latency?","options":["24.5 ms","3 ms","408.5 ms","24.4 ms"],"answer":0,"explanation":"0.95 × 3 + 0.05 × (3 + 430) = 24.5 ms."},{"prompt":"A cache answers in **3 ms** and the database in **420 ms**. With a **85% hit ratio**, what's the average latency?","options":["66 ms","357 ms","3 ms","65.6 ms"],"answer":0,"explanation":"0.85 × 3 + 0.15 × (3 + 420) = 66 ms."}]
---
# Design Drill: Effective latency with a cache #9

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
