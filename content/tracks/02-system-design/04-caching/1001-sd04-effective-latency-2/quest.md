---
slug: "sd04-effective-latency-2"
title: "Design Drill: Effective latency with a cache #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **3 ms** and the database in **100 ms**. With a **75% hit ratio**, what's the average latency?","options":["28 ms","3 ms","75 ms","27.3 ms"],"answer":0,"explanation":"0.75 × 3 + 0.25 × (3 + 100) = 28 ms."},{"prompt":"A cache answers in **3 ms** and the database in **40 ms**. With a **60% hit ratio**, what's the average latency?","options":["24 ms","3 ms","17.8 ms","19 ms"],"answer":3,"explanation":"0.6 × 3 + 0.4 × (3 + 40) = 19 ms."},{"prompt":"A cache answers in **4 ms** and the database in **480 ms**. With a **50% hit ratio**, what's the average latency?","options":["242 ms","4 ms","244 ms","240 ms"],"answer":2,"explanation":"0.5 × 4 + 0.5 × (4 + 480) = 244 ms."},{"prompt":"A cache answers in **5 ms** and the database in **410 ms**. With a **98% hit ratio**, what's the average latency?","options":["13.2 ms","13.1 ms","401.8 ms","5 ms"],"answer":0,"explanation":"0.98 × 5 + 0.02 × (5 + 410) = 13.2 ms."},{"prompt":"A cache answers in **2 ms** and the database in **250 ms**. With a **85% hit ratio**, what's the average latency?","options":["2 ms","39.2 ms","212.5 ms","39.5 ms"],"answer":3,"explanation":"0.85 × 2 + 0.15 × (2 + 250) = 39.5 ms."}]
---
# Design Drill: Effective latency with a cache #2

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
