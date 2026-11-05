---
slug: "sd04-effective-latency-30"
title: "Design Drill: Effective latency with a cache #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **2 ms** and the database in **150 ms**. With a **80% hit ratio**, what's the average latency?","options":["2 ms","120 ms","31.6 ms","32 ms"],"answer":3,"explanation":"0.8 × 2 + 0.2 × (2 + 150) = 32 ms."},{"prompt":"A cache answers in **4 ms** and the database in **50 ms**. With a **85% hit ratio**, what's the average latency?","options":["11.5 ms","42.5 ms","10.9 ms","4 ms"],"answer":0,"explanation":"0.85 × 4 + 0.15 × (4 + 50) = 11.5 ms."},{"prompt":"A cache answers in **1 ms** and the database in **120 ms**. With a **60% hit ratio**, what's the average latency?","options":["1 ms","48.6 ms","49 ms","72 ms"],"answer":2,"explanation":"0.6 × 1 + 0.4 × (1 + 120) = 49 ms."},{"prompt":"A cache answers in **3 ms** and the database in **250 ms**. With a **50% hit ratio**, what's the average latency?","options":["128 ms","125 ms","3 ms","126.5 ms"],"answer":0,"explanation":"0.5 × 3 + 0.5 × (3 + 250) = 128 ms."},{"prompt":"A cache answers in **4 ms** and the database in **320 ms**. With a **85% hit ratio**, what's the average latency?","options":["4 ms","52 ms","51.4 ms","272 ms"],"answer":1,"explanation":"0.85 × 4 + 0.15 × (4 + 320) = 52 ms."}]
---
# Design Drill: Effective latency with a cache #30

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
