---
slug: "sd04-effective-latency-52"
title: "Design Drill: Effective latency with a cache #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **4 ms** and the database in **470 ms**. With a **90% hit ratio**, what's the average latency?","options":["50.6 ms","4 ms","51 ms","423 ms"],"answer":2,"explanation":"0.9 × 4 + 0.1 × (4 + 470) = 51 ms."},{"prompt":"A cache answers in **1 ms** and the database in **380 ms**. With a **85% hit ratio**, what's the average latency?","options":["1 ms","57.9 ms","58 ms","323 ms"],"answer":2,"explanation":"0.85 × 1 + 0.15 × (1 + 380) = 58 ms."},{"prompt":"A cache answers in **4 ms** and the database in **160 ms**. With a **50% hit ratio**, what's the average latency?","options":["80 ms","82 ms","4 ms","84 ms"],"answer":3,"explanation":"0.5 × 4 + 0.5 × (4 + 160) = 84 ms."},{"prompt":"A cache answers in **3 ms** and the database in **320 ms**. With a **75% hit ratio**, what's the average latency?","options":["3 ms","240 ms","83 ms","82.3 ms"],"answer":2,"explanation":"0.75 × 3 + 0.25 × (3 + 320) = 83 ms."},{"prompt":"A cache answers in **4 ms** and the database in **270 ms**. With a **50% hit ratio**, what's the average latency?","options":["135 ms","137 ms","139 ms","4 ms"],"answer":2,"explanation":"0.5 × 4 + 0.5 × (4 + 270) = 139 ms."}]
---
# Design Drill: Effective latency with a cache #52

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
