---
slug: "sd04-effective-latency-39"
title: "Design Drill: Effective latency with a cache #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **3 ms** and the database in **80 ms**. With a **75% hit ratio**, what's the average latency?","options":["3 ms","22.3 ms","23 ms","60 ms"],"answer":2,"explanation":"0.75 × 3 + 0.25 × (3 + 80) = 23 ms."},{"prompt":"A cache answers in **4 ms** and the database in **330 ms**. With a **98% hit ratio**, what's the average latency?","options":["323.4 ms","4 ms","10.6 ms","10.5 ms"],"answer":2,"explanation":"0.98 × 4 + 0.02 × (4 + 330) = 10.6 ms."},{"prompt":"A cache answers in **1 ms** and the database in **70 ms**. With a **50% hit ratio**, what's the average latency?","options":["1 ms","36 ms","35 ms","35.5 ms"],"answer":1,"explanation":"0.5 × 1 + 0.5 × (1 + 70) = 36 ms."},{"prompt":"A cache answers in **1 ms** and the database in **460 ms**. With a **95% hit ratio**, what's the average latency?","options":["437 ms","1 ms","230.5 ms","24 ms"],"answer":3,"explanation":"0.95 × 1 + 0.05 × (1 + 460) = 24 ms."},{"prompt":"A cache answers in **5 ms** and the database in **460 ms**. With a **95% hit ratio**, what's the average latency?","options":["28 ms","27.8 ms","5 ms","437 ms"],"answer":0,"explanation":"0.95 × 5 + 0.05 × (5 + 460) = 28 ms."}]
---
# Design Drill: Effective latency with a cache #39

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
