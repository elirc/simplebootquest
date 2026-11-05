---
slug: "sd04-effective-latency-6"
title: "Design Drill: Effective latency with a cache #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **3 ms** and the database in **470 ms**. With a **98% hit ratio**, what's the average latency?","options":["12.4 ms","3 ms","460.6 ms","12.3 ms"],"answer":0,"explanation":"0.98 × 3 + 0.02 × (3 + 470) = 12.4 ms."},{"prompt":"A cache answers in **1 ms** and the database in **170 ms**. With a **95% hit ratio**, what's the average latency?","options":["161.5 ms","9.5 ms","85.5 ms","1 ms"],"answer":1,"explanation":"0.95 × 1 + 0.05 × (1 + 170) = 9.5 ms."},{"prompt":"A cache answers in **5 ms** and the database in **90 ms**. With a **85% hit ratio**, what's the average latency?","options":["18.5 ms","17.8 ms","76.5 ms","5 ms"],"answer":0,"explanation":"0.85 × 5 + 0.15 × (5 + 90) = 18.5 ms."},{"prompt":"A cache answers in **5 ms** and the database in **180 ms**. With a **60% hit ratio**, what's the average latency?","options":["75 ms","77 ms","108 ms","5 ms"],"answer":1,"explanation":"0.6 × 5 + 0.4 × (5 + 180) = 77 ms."},{"prompt":"A cache answers in **5 ms** and the database in **130 ms**. With a **95% hit ratio**, what's the average latency?","options":["11.5 ms","11.3 ms","5 ms","123.5 ms"],"answer":0,"explanation":"0.95 × 5 + 0.05 × (5 + 130) = 11.5 ms."}]
---
# Design Drill: Effective latency with a cache #6

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
