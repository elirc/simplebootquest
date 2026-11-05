---
slug: "sd04-effective-latency-28"
title: "Design Drill: Effective latency with a cache #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **3 ms** and the database in **410 ms**. With a **80% hit ratio**, what's the average latency?","options":["85 ms","84.4 ms","328 ms","3 ms"],"answer":0,"explanation":"0.8 × 3 + 0.2 × (3 + 410) = 85 ms."},{"prompt":"A cache answers in **5 ms** and the database in **280 ms**. With a **50% hit ratio**, what's the average latency?","options":["142.5 ms","140 ms","5 ms","145 ms"],"answer":3,"explanation":"0.5 × 5 + 0.5 × (5 + 280) = 145 ms."},{"prompt":"A cache answers in **3 ms** and the database in **340 ms**. With a **95% hit ratio**, what's the average latency?","options":["20 ms","19.9 ms","323 ms","3 ms"],"answer":0,"explanation":"0.95 × 3 + 0.05 × (3 + 340) = 20 ms."},{"prompt":"A cache answers in **5 ms** and the database in **160 ms**. With a **98% hit ratio**, what's the average latency?","options":["8.1 ms","5 ms","156.8 ms","8.2 ms"],"answer":3,"explanation":"0.98 × 5 + 0.02 × (5 + 160) = 8.2 ms."},{"prompt":"A cache answers in **2 ms** and the database in **410 ms**. With a **98% hit ratio**, what's the average latency?","options":["206 ms","2 ms","401.8 ms","10.2 ms"],"answer":3,"explanation":"0.98 × 2 + 0.02 × (2 + 410) = 10.2 ms."}]
---
# Design Drill: Effective latency with a cache #28

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
