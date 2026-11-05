---
slug: "sd04-effective-latency-22"
title: "Design Drill: Effective latency with a cache #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **3 ms** and the database in **80 ms**. With a **80% hit ratio**, what's the average latency?","options":["19 ms","3 ms","64 ms","18.4 ms"],"answer":0,"explanation":"0.8 × 3 + 0.2 × (3 + 80) = 19 ms."},{"prompt":"A cache answers in **4 ms** and the database in **430 ms**. With a **60% hit ratio**, what's the average latency?","options":["176 ms","4 ms","174.4 ms","258 ms"],"answer":0,"explanation":"0.6 × 4 + 0.4 × (4 + 430) = 176 ms."},{"prompt":"A cache answers in **5 ms** and the database in **300 ms**. With a **85% hit ratio**, what's the average latency?","options":["5 ms","50 ms","49.3 ms","255 ms"],"answer":1,"explanation":"0.85 × 5 + 0.15 × (5 + 300) = 50 ms."},{"prompt":"A cache answers in **4 ms** and the database in **460 ms**. With a **98% hit ratio**, what's the average latency?","options":["4 ms","450.8 ms","13.1 ms","13.2 ms"],"answer":3,"explanation":"0.98 × 4 + 0.02 × (4 + 460) = 13.2 ms."},{"prompt":"A cache answers in **5 ms** and the database in **410 ms**. With a **75% hit ratio**, what's the average latency?","options":["106.3 ms","5 ms","107.5 ms","307.5 ms"],"answer":2,"explanation":"0.75 × 5 + 0.25 × (5 + 410) = 107.5 ms."}]
---
# Design Drill: Effective latency with a cache #22

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
