---
slug: "sd04-effective-latency-55"
title: "Design Drill: Effective latency with a cache #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **3 ms** and the database in **50 ms**. With a **60% hit ratio**, what's the average latency?","options":["3 ms","23 ms","30 ms","21.8 ms"],"answer":1,"explanation":"0.6 × 3 + 0.4 × (3 + 50) = 23 ms."},{"prompt":"A cache answers in **1 ms** and the database in **200 ms**. With a **80% hit ratio**, what's the average latency?","options":["1 ms","41 ms","40.8 ms","160 ms"],"answer":1,"explanation":"0.8 × 1 + 0.2 × (1 + 200) = 41 ms."},{"prompt":"A cache answers in **3 ms** and the database in **460 ms**. With a **99% hit ratio**, what's the average latency?","options":["7.6 ms","231.5 ms","3 ms","455.4 ms"],"answer":0,"explanation":"0.99 × 3 + 0.01 × (3 + 460) = 7.6 ms."},{"prompt":"A cache answers in **5 ms** and the database in **190 ms**. With a **50% hit ratio**, what's the average latency?","options":["97.5 ms","95 ms","100 ms","5 ms"],"answer":2,"explanation":"0.5 × 5 + 0.5 × (5 + 190) = 100 ms."},{"prompt":"A cache answers in **3 ms** and the database in **50 ms**. With a **99% hit ratio**, what's the average latency?","options":["26.5 ms","49.5 ms","3.5 ms","3 ms"],"answer":2,"explanation":"0.99 × 3 + 0.01 × (3 + 50) = 3.5 ms."}]
---
# Design Drill: Effective latency with a cache #55

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
