---
slug: "sd04-effective-latency-35"
title: "Design Drill: Effective latency with a cache #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **1 ms** and the database in **270 ms**. With a **60% hit ratio**, what's the average latency?","options":["109 ms","162 ms","1 ms","108.6 ms"],"answer":0,"explanation":"0.6 × 1 + 0.4 × (1 + 270) = 109 ms."},{"prompt":"A cache answers in **4 ms** and the database in **140 ms**. With a **80% hit ratio**, what's the average latency?","options":["32 ms","31.2 ms","112 ms","4 ms"],"answer":0,"explanation":"0.8 × 4 + 0.2 × (4 + 140) = 32 ms."},{"prompt":"A cache answers in **4 ms** and the database in **500 ms**. With a **50% hit ratio**, what's the average latency?","options":["252 ms","254 ms","4 ms","250 ms"],"answer":1,"explanation":"0.5 × 4 + 0.5 × (4 + 500) = 254 ms."},{"prompt":"A cache answers in **1 ms** and the database in **100 ms**. With a **60% hit ratio**, what's the average latency?","options":["40.6 ms","41 ms","1 ms","60 ms"],"answer":1,"explanation":"0.6 × 1 + 0.4 × (1 + 100) = 41 ms."},{"prompt":"A cache answers in **2 ms** and the database in **420 ms**. With a **60% hit ratio**, what's the average latency?","options":["169.2 ms","170 ms","252 ms","2 ms"],"answer":1,"explanation":"0.6 × 2 + 0.4 × (2 + 420) = 170 ms."}]
---
# Design Drill: Effective latency with a cache #35

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
