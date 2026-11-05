---
slug: "sd04-effective-latency-50"
title: "Design Drill: Effective latency with a cache #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **3 ms** and the database in **170 ms**. With a **60% hit ratio**, what's the average latency?","options":["71 ms","69.8 ms","3 ms","102 ms"],"answer":0,"explanation":"0.6 × 3 + 0.4 × (3 + 170) = 71 ms."},{"prompt":"A cache answers in **5 ms** and the database in **440 ms**. With a **98% hit ratio**, what's the average latency?","options":["13.7 ms","13.8 ms","431.2 ms","5 ms"],"answer":1,"explanation":"0.98 × 5 + 0.02 × (5 + 440) = 13.8 ms."},{"prompt":"A cache answers in **1 ms** and the database in **140 ms**. With a **75% hit ratio**, what's the average latency?","options":["1 ms","105 ms","35.8 ms","36 ms"],"answer":3,"explanation":"0.75 × 1 + 0.25 × (1 + 140) = 36 ms."},{"prompt":"A cache answers in **1 ms** and the database in **320 ms**. With a **85% hit ratio**, what's the average latency?","options":["1 ms","49 ms","272 ms","48.9 ms"],"answer":1,"explanation":"0.85 × 1 + 0.15 × (1 + 320) = 49 ms."},{"prompt":"A cache answers in **5 ms** and the database in **250 ms**. With a **60% hit ratio**, what's the average latency?","options":["105 ms","150 ms","103 ms","5 ms"],"answer":0,"explanation":"0.6 × 5 + 0.4 × (5 + 250) = 105 ms."}]
---
# Design Drill: Effective latency with a cache #50

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
