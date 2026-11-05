---
slug: "sd04-effective-latency-14"
title: "Design Drill: Effective latency with a cache #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **5 ms** and the database in **190 ms**. With a **95% hit ratio**, what's the average latency?","options":["14.3 ms","5 ms","14.5 ms","180.5 ms"],"answer":2,"explanation":"0.95 × 5 + 0.05 × (5 + 190) = 14.5 ms."},{"prompt":"A cache answers in **4 ms** and the database in **170 ms**. With a **80% hit ratio**, what's the average latency?","options":["4 ms","136 ms","37.2 ms","38 ms"],"answer":3,"explanation":"0.8 × 4 + 0.2 × (4 + 170) = 38 ms."},{"prompt":"A cache answers in **1 ms** and the database in **120 ms**. With a **95% hit ratio**, what's the average latency?","options":["1 ms","7 ms","114 ms","60.5 ms"],"answer":1,"explanation":"0.95 × 1 + 0.05 × (1 + 120) = 7 ms."},{"prompt":"A cache answers in **5 ms** and the database in **500 ms**. With a **60% hit ratio**, what's the average latency?","options":["205 ms","5 ms","203 ms","300 ms"],"answer":0,"explanation":"0.6 × 5 + 0.4 × (5 + 500) = 205 ms."},{"prompt":"A cache answers in **4 ms** and the database in **340 ms**. With a **85% hit ratio**, what's the average latency?","options":["54.4 ms","55 ms","289 ms","4 ms"],"answer":1,"explanation":"0.85 × 4 + 0.15 × (4 + 340) = 55 ms."}]
---
# Design Drill: Effective latency with a cache #14

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
