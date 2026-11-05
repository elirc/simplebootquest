---
slug: "sd04-effective-latency-48"
title: "Design Drill: Effective latency with a cache #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **5 ms** and the database in **230 ms**. With a **98% hit ratio**, what's the average latency?","options":["9.5 ms","5 ms","225.4 ms","9.6 ms"],"answer":3,"explanation":"0.98 × 5 + 0.02 × (5 + 230) = 9.6 ms."},{"prompt":"A cache answers in **1 ms** and the database in **250 ms**. With a **90% hit ratio**, what's the average latency?","options":["25.9 ms","1 ms","225 ms","26 ms"],"answer":3,"explanation":"0.9 × 1 + 0.1 × (1 + 250) = 26 ms."},{"prompt":"A cache answers in **1 ms** and the database in **420 ms**. With a **95% hit ratio**, what's the average latency?","options":["1 ms","210.5 ms","22 ms","399 ms"],"answer":2,"explanation":"0.95 × 1 + 0.05 × (1 + 420) = 22 ms."},{"prompt":"A cache answers in **5 ms** and the database in **30 ms**. With a **98% hit ratio**, what's the average latency?","options":["5 ms","5.5 ms","5.6 ms","29.4 ms"],"answer":2,"explanation":"0.98 × 5 + 0.02 × (5 + 30) = 5.6 ms."},{"prompt":"A cache answers in **5 ms** and the database in **450 ms**. With a **85% hit ratio**, what's the average latency?","options":["5 ms","382.5 ms","71.8 ms","72.5 ms"],"answer":3,"explanation":"0.85 × 5 + 0.15 × (5 + 450) = 72.5 ms."}]
---
# Design Drill: Effective latency with a cache #48

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
