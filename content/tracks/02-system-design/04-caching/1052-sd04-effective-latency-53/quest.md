---
slug: "sd04-effective-latency-53"
title: "Design Drill: Effective latency with a cache #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **3 ms** and the database in **440 ms**. With a **99% hit ratio**, what's the average latency?","options":["3 ms","221.5 ms","435.6 ms","7.4 ms"],"answer":3,"explanation":"0.99 × 3 + 0.01 × (3 + 440) = 7.4 ms."},{"prompt":"A cache answers in **4 ms** and the database in **80 ms**. With a **99% hit ratio**, what's the average latency?","options":["42 ms","4 ms","4.8 ms","79.2 ms"],"answer":2,"explanation":"0.99 × 4 + 0.01 × (4 + 80) = 4.8 ms."},{"prompt":"A cache answers in **4 ms** and the database in **150 ms**. With a **90% hit ratio**, what's the average latency?","options":["18.6 ms","19 ms","135 ms","4 ms"],"answer":1,"explanation":"0.9 × 4 + 0.1 × (4 + 150) = 19 ms."},{"prompt":"A cache answers in **5 ms** and the database in **140 ms**. With a **50% hit ratio**, what's the average latency?","options":["75 ms","70 ms","5 ms","72.5 ms"],"answer":0,"explanation":"0.5 × 5 + 0.5 × (5 + 140) = 75 ms."},{"prompt":"A cache answers in **2 ms** and the database in **200 ms**. With a **98% hit ratio**, what's the average latency?","options":["196 ms","101 ms","2 ms","6 ms"],"answer":3,"explanation":"0.98 × 2 + 0.02 × (2 + 200) = 6 ms."}]
---
# Design Drill: Effective latency with a cache #53

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
