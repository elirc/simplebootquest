---
slug: "sd04-effective-latency-23"
title: "Design Drill: Effective latency with a cache #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **4 ms** and the database in **250 ms**. With a **99% hit ratio**, what's the average latency?","options":["6.5 ms","247.5 ms","4 ms","127 ms"],"answer":0,"explanation":"0.99 × 4 + 0.01 × (4 + 250) = 6.5 ms."},{"prompt":"A cache answers in **3 ms** and the database in **30 ms**. With a **85% hit ratio**, what's the average latency?","options":["7.5 ms","7.1 ms","3 ms","25.5 ms"],"answer":0,"explanation":"0.85 × 3 + 0.15 × (3 + 30) = 7.5 ms."},{"prompt":"A cache answers in **5 ms** and the database in **120 ms**. With a **50% hit ratio**, what's the average latency?","options":["62.5 ms","5 ms","65 ms","60 ms"],"answer":2,"explanation":"0.5 × 5 + 0.5 × (5 + 120) = 65 ms."},{"prompt":"A cache answers in **4 ms** and the database in **90 ms**. With a **98% hit ratio**, what's the average latency?","options":["88.2 ms","5.7 ms","4 ms","5.8 ms"],"answer":3,"explanation":"0.98 × 4 + 0.02 × (4 + 90) = 5.8 ms."},{"prompt":"A cache answers in **1 ms** and the database in **450 ms**. With a **95% hit ratio**, what's the average latency?","options":["23.5 ms","427.5 ms","225.5 ms","1 ms"],"answer":0,"explanation":"0.95 × 1 + 0.05 × (1 + 450) = 23.5 ms."}]
---
# Design Drill: Effective latency with a cache #23

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
