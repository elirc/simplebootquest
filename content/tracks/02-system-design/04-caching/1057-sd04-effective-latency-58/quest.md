---
slug: "sd04-effective-latency-58"
title: "Design Drill: Effective latency with a cache #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **5 ms** and the database in **440 ms**. With a **50% hit ratio**, what's the average latency?","options":["222.5 ms","220 ms","225 ms","5 ms"],"answer":2,"explanation":"0.5 × 5 + 0.5 × (5 + 440) = 225 ms."},{"prompt":"A cache answers in **2 ms** and the database in **130 ms**. With a **95% hit ratio**, what's the average latency?","options":["2 ms","8.4 ms","8.5 ms","123.5 ms"],"answer":2,"explanation":"0.95 × 2 + 0.05 × (2 + 130) = 8.5 ms."},{"prompt":"A cache answers in **5 ms** and the database in **390 ms**. With a **80% hit ratio**, what's the average latency?","options":["312 ms","82 ms","5 ms","83 ms"],"answer":3,"explanation":"0.8 × 5 + 0.2 × (5 + 390) = 83 ms."},{"prompt":"A cache answers in **4 ms** and the database in **410 ms**. With a **85% hit ratio**, what's the average latency?","options":["64.9 ms","4 ms","65.5 ms","348.5 ms"],"answer":2,"explanation":"0.85 × 4 + 0.15 × (4 + 410) = 65.5 ms."},{"prompt":"A cache answers in **2 ms** and the database in **280 ms**. With a **75% hit ratio**, what's the average latency?","options":["210 ms","71.5 ms","72 ms","2 ms"],"answer":2,"explanation":"0.75 × 2 + 0.25 × (2 + 280) = 72 ms."}]
---
# Design Drill: Effective latency with a cache #58

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
