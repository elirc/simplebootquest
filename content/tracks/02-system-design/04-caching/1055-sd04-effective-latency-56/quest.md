---
slug: "sd04-effective-latency-56"
title: "Design Drill: Effective latency with a cache #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **5 ms** and the database in **280 ms**. With a **98% hit ratio**, what's the average latency?","options":["274.4 ms","10.5 ms","10.6 ms","5 ms"],"answer":2,"explanation":"0.98 × 5 + 0.02 × (5 + 280) = 10.6 ms."},{"prompt":"A cache answers in **5 ms** and the database in **20 ms**. With a **85% hit ratio**, what's the average latency?","options":["17 ms","5 ms","8 ms","7.3 ms"],"answer":2,"explanation":"0.85 × 5 + 0.15 × (5 + 20) = 8 ms."},{"prompt":"A cache answers in **4 ms** and the database in **260 ms**. With a **75% hit ratio**, what's the average latency?","options":["69 ms","4 ms","195 ms","68 ms"],"answer":0,"explanation":"0.75 × 4 + 0.25 × (4 + 260) = 69 ms."},{"prompt":"A cache answers in **4 ms** and the database in **320 ms**. With a **98% hit ratio**, what's the average latency?","options":["313.6 ms","4 ms","10.4 ms","10.3 ms"],"answer":2,"explanation":"0.98 × 4 + 0.02 × (4 + 320) = 10.4 ms."},{"prompt":"A cache answers in **4 ms** and the database in **60 ms**. With a **75% hit ratio**, what's the average latency?","options":["18 ms","45 ms","4 ms","19 ms"],"answer":3,"explanation":"0.75 × 4 + 0.25 × (4 + 60) = 19 ms."}]
---
# Design Drill: Effective latency with a cache #56

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
