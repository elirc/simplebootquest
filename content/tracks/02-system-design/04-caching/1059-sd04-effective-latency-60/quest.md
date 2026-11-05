---
slug: "sd04-effective-latency-60"
title: "Design Drill: Effective latency with a cache #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **2 ms** and the database in **220 ms**. With a **50% hit ratio**, what's the average latency?","options":["112 ms","110 ms","111 ms","2 ms"],"answer":0,"explanation":"0.5 × 2 + 0.5 × (2 + 220) = 112 ms."},{"prompt":"A cache answers in **1 ms** and the database in **50 ms**. With a **80% hit ratio**, what's the average latency?","options":["10.8 ms","11 ms","1 ms","40 ms"],"answer":1,"explanation":"0.8 × 1 + 0.2 × (1 + 50) = 11 ms."},{"prompt":"A cache answers in **5 ms** and the database in **150 ms**. With a **60% hit ratio**, what's the average latency?","options":["90 ms","65 ms","63 ms","5 ms"],"answer":1,"explanation":"0.6 × 5 + 0.4 × (5 + 150) = 65 ms."},{"prompt":"A cache answers in **5 ms** and the database in **210 ms**. With a **90% hit ratio**, what's the average latency?","options":["189 ms","25.5 ms","5 ms","26 ms"],"answer":3,"explanation":"0.9 × 5 + 0.1 × (5 + 210) = 26 ms."},{"prompt":"A cache answers in **4 ms** and the database in **40 ms**. With a **99% hit ratio**, what's the average latency?","options":["4 ms","39.6 ms","22 ms","4.4 ms"],"answer":3,"explanation":"0.99 × 4 + 0.01 × (4 + 40) = 4.4 ms."}]
---
# Design Drill: Effective latency with a cache #60

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
