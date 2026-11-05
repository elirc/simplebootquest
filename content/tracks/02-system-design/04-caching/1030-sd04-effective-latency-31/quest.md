---
slug: "sd04-effective-latency-31"
title: "Design Drill: Effective latency with a cache #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **3 ms** and the database in **260 ms**. With a **99% hit ratio**, what's the average latency?","options":["5.6 ms","3 ms","257.4 ms","131.5 ms"],"answer":0,"explanation":"0.99 × 3 + 0.01 × (3 + 260) = 5.6 ms."},{"prompt":"A cache answers in **5 ms** and the database in **80 ms**. With a **98% hit ratio**, what's the average latency?","options":["6.6 ms","78.4 ms","6.5 ms","5 ms"],"answer":0,"explanation":"0.98 × 5 + 0.02 × (5 + 80) = 6.6 ms."},{"prompt":"A cache answers in **1 ms** and the database in **420 ms**. With a **80% hit ratio**, what's the average latency?","options":["1 ms","336 ms","84.8 ms","85 ms"],"answer":3,"explanation":"0.8 × 1 + 0.2 × (1 + 420) = 85 ms."},{"prompt":"A cache answers in **3 ms** and the database in **500 ms**. With a **95% hit ratio**, what's the average latency?","options":["28 ms","27.9 ms","3 ms","475 ms"],"answer":0,"explanation":"0.95 × 3 + 0.05 × (3 + 500) = 28 ms."},{"prompt":"A cache answers in **3 ms** and the database in **120 ms**. With a **60% hit ratio**, what's the average latency?","options":["72 ms","3 ms","49.8 ms","51 ms"],"answer":3,"explanation":"0.6 × 3 + 0.4 × (3 + 120) = 51 ms."}]
---
# Design Drill: Effective latency with a cache #31

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
