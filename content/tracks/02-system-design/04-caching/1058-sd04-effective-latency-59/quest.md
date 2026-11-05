---
slug: "sd04-effective-latency-59"
title: "Design Drill: Effective latency with a cache #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **5 ms** and the database in **270 ms**. With a **99% hit ratio**, what's the average latency?","options":["267.3 ms","7.7 ms","5 ms","137.5 ms"],"answer":1,"explanation":"0.99 × 5 + 0.01 × (5 + 270) = 7.7 ms."},{"prompt":"A cache answers in **4 ms** and the database in **230 ms**. With a **50% hit ratio**, what's the average latency?","options":["4 ms","117 ms","119 ms","115 ms"],"answer":2,"explanation":"0.5 × 4 + 0.5 × (4 + 230) = 119 ms."},{"prompt":"A cache answers in **3 ms** and the database in **470 ms**. With a **99% hit ratio**, what's the average latency?","options":["7.7 ms","465.3 ms","236.5 ms","3 ms"],"answer":0,"explanation":"0.99 × 3 + 0.01 × (3 + 470) = 7.7 ms."},{"prompt":"A cache answers in **2 ms** and the database in **380 ms**. With a **80% hit ratio**, what's the average latency?","options":["77.6 ms","304 ms","78 ms","2 ms"],"answer":2,"explanation":"0.8 × 2 + 0.2 × (2 + 380) = 78 ms."},{"prompt":"A cache answers in **2 ms** and the database in **460 ms**. With a **99% hit ratio**, what's the average latency?","options":["231 ms","455.4 ms","2 ms","6.6 ms"],"answer":3,"explanation":"0.99 × 2 + 0.01 × (2 + 460) = 6.6 ms."}]
---
# Design Drill: Effective latency with a cache #59

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
