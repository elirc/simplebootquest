---
slug: "sd04-effective-latency-54"
title: "Design Drill: Effective latency with a cache #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **5 ms** and the database in **380 ms**. With a **95% hit ratio**, what's the average latency?","options":["24 ms","23.8 ms","5 ms","361 ms"],"answer":0,"explanation":"0.95 × 5 + 0.05 × (5 + 380) = 24 ms."},{"prompt":"A cache answers in **5 ms** and the database in **50 ms**. With a **80% hit ratio**, what's the average latency?","options":["14 ms","5 ms","15 ms","40 ms"],"answer":2,"explanation":"0.8 × 5 + 0.2 × (5 + 50) = 15 ms."},{"prompt":"A cache answers in **2 ms** and the database in **300 ms**. With a **85% hit ratio**, what's the average latency?","options":["255 ms","46.7 ms","47 ms","2 ms"],"answer":2,"explanation":"0.85 × 2 + 0.15 × (2 + 300) = 47 ms."},{"prompt":"A cache answers in **5 ms** and the database in **450 ms**. With a **99% hit ratio**, what's the average latency?","options":["227.5 ms","5 ms","445.5 ms","9.5 ms"],"answer":3,"explanation":"0.99 × 5 + 0.01 × (5 + 450) = 9.5 ms."},{"prompt":"A cache answers in **4 ms** and the database in **220 ms**. With a **60% hit ratio**, what's the average latency?","options":["90.4 ms","4 ms","132 ms","92 ms"],"answer":3,"explanation":"0.6 × 4 + 0.4 × (4 + 220) = 92 ms."}]
---
# Design Drill: Effective latency with a cache #54

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
