---
slug: "sd04-effective-latency-16"
title: "Design Drill: Effective latency with a cache #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **1 ms** and the database in **240 ms**. With a **85% hit ratio**, what's the average latency?","options":["36.9 ms","37 ms","204 ms","1 ms"],"answer":1,"explanation":"0.85 × 1 + 0.15 × (1 + 240) = 37 ms."},{"prompt":"A cache answers in **5 ms** and the database in **200 ms**. With a **98% hit ratio**, what's the average latency?","options":["9 ms","196 ms","8.9 ms","5 ms"],"answer":0,"explanation":"0.98 × 5 + 0.02 × (5 + 200) = 9 ms."},{"prompt":"A cache answers in **3 ms** and the database in **30 ms**. With a **75% hit ratio**, what's the average latency?","options":["9.8 ms","10.5 ms","3 ms","22.5 ms"],"answer":1,"explanation":"0.75 × 3 + 0.25 × (3 + 30) = 10.5 ms."},{"prompt":"A cache answers in **2 ms** and the database in **290 ms**. With a **85% hit ratio**, what's the average latency?","options":["246.5 ms","45.5 ms","45.2 ms","2 ms"],"answer":1,"explanation":"0.85 × 2 + 0.15 × (2 + 290) = 45.5 ms."},{"prompt":"A cache answers in **3 ms** and the database in **70 ms**. With a **75% hit ratio**, what's the average latency?","options":["20.5 ms","52.5 ms","3 ms","19.8 ms"],"answer":0,"explanation":"0.75 × 3 + 0.25 × (3 + 70) = 20.5 ms."}]
---
# Design Drill: Effective latency with a cache #16

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
