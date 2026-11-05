---
slug: "sd04-effective-latency-27"
title: "Design Drill: Effective latency with a cache #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **2 ms** and the database in **460 ms**. With a **80% hit ratio**, what's the average latency?","options":["94 ms","2 ms","93.6 ms","368 ms"],"answer":0,"explanation":"0.8 × 2 + 0.2 × (2 + 460) = 94 ms."},{"prompt":"A cache answers in **3 ms** and the database in **400 ms**. With a **50% hit ratio**, what's the average latency?","options":["201.5 ms","200 ms","3 ms","203 ms"],"answer":3,"explanation":"0.5 × 3 + 0.5 × (3 + 400) = 203 ms."},{"prompt":"A cache answers in **4 ms** and the database in **210 ms**. With a **99% hit ratio**, what's the average latency?","options":["207.9 ms","107 ms","4 ms","6.1 ms"],"answer":3,"explanation":"0.99 × 4 + 0.01 × (4 + 210) = 6.1 ms."},{"prompt":"A cache answers in **4 ms** and the database in **120 ms**. With a **98% hit ratio**, what's the average latency?","options":["6.4 ms","4 ms","6.3 ms","117.6 ms"],"answer":0,"explanation":"0.98 × 4 + 0.02 × (4 + 120) = 6.4 ms."},{"prompt":"A cache answers in **5 ms** and the database in **290 ms**. With a **50% hit ratio**, what's the average latency?","options":["5 ms","150 ms","145 ms","147.5 ms"],"answer":1,"explanation":"0.5 × 5 + 0.5 × (5 + 290) = 150 ms."}]
---
# Design Drill: Effective latency with a cache #27

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
