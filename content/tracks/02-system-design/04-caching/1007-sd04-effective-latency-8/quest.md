---
slug: "sd04-effective-latency-8"
title: "Design Drill: Effective latency with a cache #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **3 ms** and the database in **440 ms**. With a **98% hit ratio**, what's the average latency?","options":["431.2 ms","11.8 ms","3 ms","11.7 ms"],"answer":1,"explanation":"0.98 × 3 + 0.02 × (3 + 440) = 11.8 ms."},{"prompt":"A cache answers in **1 ms** and the database in **110 ms**. With a **99% hit ratio**, what's the average latency?","options":["55.5 ms","2.1 ms","1 ms","108.9 ms"],"answer":1,"explanation":"0.99 × 1 + 0.01 × (1 + 110) = 2.1 ms."},{"prompt":"A cache answers in **5 ms** and the database in **500 ms**. With a **98% hit ratio**, what's the average latency?","options":["490 ms","5 ms","14.9 ms","15 ms"],"answer":3,"explanation":"0.98 × 5 + 0.02 × (5 + 500) = 15 ms."},{"prompt":"A cache answers in **1 ms** and the database in **330 ms**. With a **80% hit ratio**, what's the average latency?","options":["1 ms","66.8 ms","264 ms","67 ms"],"answer":3,"explanation":"0.8 × 1 + 0.2 × (1 + 330) = 67 ms."},{"prompt":"A cache answers in **3 ms** and the database in **170 ms**. With a **90% hit ratio**, what's the average latency?","options":["20 ms","19.7 ms","153 ms","3 ms"],"answer":0,"explanation":"0.9 × 3 + 0.1 × (3 + 170) = 20 ms."}]
---
# Design Drill: Effective latency with a cache #8

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
