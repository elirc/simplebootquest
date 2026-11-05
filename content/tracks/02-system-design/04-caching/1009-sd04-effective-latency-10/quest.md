---
slug: "sd04-effective-latency-10"
title: "Design Drill: Effective latency with a cache #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **3 ms** and the database in **130 ms**. With a **85% hit ratio**, what's the average latency?","options":["110.5 ms","22.1 ms","3 ms","22.5 ms"],"answer":3,"explanation":"0.85 × 3 + 0.15 × (3 + 130) = 22.5 ms."},{"prompt":"A cache answers in **3 ms** and the database in **40 ms**. With a **99% hit ratio**, what's the average latency?","options":["21.5 ms","39.6 ms","3 ms","3.4 ms"],"answer":3,"explanation":"0.99 × 3 + 0.01 × (3 + 40) = 3.4 ms."},{"prompt":"A cache answers in **4 ms** and the database in **20 ms**. With a **90% hit ratio**, what's the average latency?","options":["4 ms","6 ms","18 ms","5.6 ms"],"answer":1,"explanation":"0.9 × 4 + 0.1 × (4 + 20) = 6 ms."},{"prompt":"A cache answers in **5 ms** and the database in **440 ms**. With a **80% hit ratio**, what's the average latency?","options":["352 ms","93 ms","5 ms","92 ms"],"answer":1,"explanation":"0.8 × 5 + 0.2 × (5 + 440) = 93 ms."},{"prompt":"A cache answers in **3 ms** and the database in **70 ms**. With a **95% hit ratio**, what's the average latency?","options":["3 ms","6.5 ms","66.5 ms","6.4 ms"],"answer":1,"explanation":"0.95 × 3 + 0.05 × (3 + 70) = 6.5 ms."}]
---
# Design Drill: Effective latency with a cache #10

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
