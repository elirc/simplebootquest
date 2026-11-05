---
slug: "sd04-effective-latency-24"
title: "Design Drill: Effective latency with a cache #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **3 ms** and the database in **30 ms**. With a **98% hit ratio**, what's the average latency?","options":["3 ms","29.4 ms","3.5 ms","3.6 ms"],"answer":3,"explanation":"0.98 × 3 + 0.02 × (3 + 30) = 3.6 ms."},{"prompt":"A cache answers in **4 ms** and the database in **270 ms**. With a **60% hit ratio**, what's the average latency?","options":["112 ms","162 ms","4 ms","110.4 ms"],"answer":0,"explanation":"0.6 × 4 + 0.4 × (4 + 270) = 112 ms."},{"prompt":"A cache answers in **1 ms** and the database in **50 ms**. With a **75% hit ratio**, what's the average latency?","options":["13.3 ms","1 ms","37.5 ms","13.5 ms"],"answer":3,"explanation":"0.75 × 1 + 0.25 × (1 + 50) = 13.5 ms."},{"prompt":"A cache answers in **1 ms** and the database in **360 ms**. With a **98% hit ratio**, what's the average latency?","options":["180.5 ms","352.8 ms","8.2 ms","1 ms"],"answer":2,"explanation":"0.98 × 1 + 0.02 × (1 + 360) = 8.2 ms."},{"prompt":"A cache answers in **3 ms** and the database in **430 ms**. With a **50% hit ratio**, what's the average latency?","options":["215 ms","216.5 ms","3 ms","218 ms"],"answer":3,"explanation":"0.5 × 3 + 0.5 × (3 + 430) = 218 ms."}]
---
# Design Drill: Effective latency with a cache #24

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
