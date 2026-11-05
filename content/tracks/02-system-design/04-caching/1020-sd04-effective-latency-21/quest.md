---
slug: "sd04-effective-latency-21"
title: "Design Drill: Effective latency with a cache #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **1 ms** and the database in **340 ms**. With a **60% hit ratio**, what's the average latency?","options":["136.6 ms","137 ms","204 ms","1 ms"],"answer":1,"explanation":"0.6 × 1 + 0.4 × (1 + 340) = 137 ms."},{"prompt":"A cache answers in **3 ms** and the database in **240 ms**. With a **95% hit ratio**, what's the average latency?","options":["14.9 ms","228 ms","3 ms","15 ms"],"answer":3,"explanation":"0.95 × 3 + 0.05 × (3 + 240) = 15 ms."},{"prompt":"A cache answers in **5 ms** and the database in **230 ms**. With a **99% hit ratio**, what's the average latency?","options":["117.5 ms","7.3 ms","5 ms","227.7 ms"],"answer":1,"explanation":"0.99 × 5 + 0.01 × (5 + 230) = 7.3 ms."},{"prompt":"A cache answers in **2 ms** and the database in **340 ms**. With a **99% hit ratio**, what's the average latency?","options":["2 ms","336.6 ms","171 ms","5.4 ms"],"answer":3,"explanation":"0.99 × 2 + 0.01 × (2 + 340) = 5.4 ms."},{"prompt":"A cache answers in **5 ms** and the database in **330 ms**. With a **85% hit ratio**, what's the average latency?","options":["54.5 ms","5 ms","53.8 ms","280.5 ms"],"answer":0,"explanation":"0.85 × 5 + 0.15 × (5 + 330) = 54.5 ms."}]
---
# Design Drill: Effective latency with a cache #21

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
