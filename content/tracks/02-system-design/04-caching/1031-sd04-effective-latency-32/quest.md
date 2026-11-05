---
slug: "sd04-effective-latency-32"
title: "Design Drill: Effective latency with a cache #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **1 ms** and the database in **50 ms**. With a **95% hit ratio**, what's the average latency?","options":["3.5 ms","47.5 ms","25.5 ms","1 ms"],"answer":0,"explanation":"0.95 × 1 + 0.05 × (1 + 50) = 3.5 ms."},{"prompt":"A cache answers in **5 ms** and the database in **430 ms**. With a **99% hit ratio**, what's the average latency?","options":["425.7 ms","217.5 ms","9.3 ms","5 ms"],"answer":2,"explanation":"0.99 × 5 + 0.01 × (5 + 430) = 9.3 ms."},{"prompt":"A cache answers in **3 ms** and the database in **290 ms**. With a **75% hit ratio**, what's the average latency?","options":["74.8 ms","3 ms","217.5 ms","75.5 ms"],"answer":3,"explanation":"0.75 × 3 + 0.25 × (3 + 290) = 75.5 ms."},{"prompt":"A cache answers in **2 ms** and the database in **310 ms**. With a **50% hit ratio**, what's the average latency?","options":["156 ms","2 ms","157 ms","155 ms"],"answer":2,"explanation":"0.5 × 2 + 0.5 × (2 + 310) = 157 ms."},{"prompt":"A cache answers in **4 ms** and the database in **170 ms**. With a **60% hit ratio**, what's the average latency?","options":["102 ms","72 ms","70.4 ms","4 ms"],"answer":1,"explanation":"0.6 × 4 + 0.4 × (4 + 170) = 72 ms."}]
---
# Design Drill: Effective latency with a cache #32

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
