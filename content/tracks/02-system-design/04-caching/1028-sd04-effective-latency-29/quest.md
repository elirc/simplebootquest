---
slug: "sd04-effective-latency-29"
title: "Design Drill: Effective latency with a cache #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **1 ms** and the database in **210 ms**. With a **98% hit ratio**, what's the average latency?","options":["1 ms","105.5 ms","205.8 ms","5.2 ms"],"answer":3,"explanation":"0.98 × 1 + 0.02 × (1 + 210) = 5.2 ms."},{"prompt":"A cache answers in **3 ms** and the database in **380 ms**. With a **50% hit ratio**, what's the average latency?","options":["193 ms","3 ms","191.5 ms","190 ms"],"answer":0,"explanation":"0.5 × 3 + 0.5 × (3 + 380) = 193 ms."},{"prompt":"A cache answers in **1 ms** and the database in **400 ms**. With a **50% hit ratio**, what's the average latency?","options":["1 ms","201 ms","200 ms","200.5 ms"],"answer":1,"explanation":"0.5 × 1 + 0.5 × (1 + 400) = 201 ms."},{"prompt":"A cache answers in **4 ms** and the database in **60 ms**. With a **60% hit ratio**, what's the average latency?","options":["26.4 ms","4 ms","28 ms","36 ms"],"answer":2,"explanation":"0.6 × 4 + 0.4 × (4 + 60) = 28 ms."},{"prompt":"A cache answers in **1 ms** and the database in **60 ms**. With a **60% hit ratio**, what's the average latency?","options":["25 ms","24.6 ms","1 ms","36 ms"],"answer":0,"explanation":"0.6 × 1 + 0.4 × (1 + 60) = 25 ms."}]
---
# Design Drill: Effective latency with a cache #29

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
