---
slug: "sd04-effective-latency-12"
title: "Design Drill: Effective latency with a cache #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **2 ms** and the database in **120 ms**. With a **95% hit ratio**, what's the average latency?","options":["8 ms","114 ms","2 ms","7.9 ms"],"answer":0,"explanation":"0.95 × 2 + 0.05 × (2 + 120) = 8 ms."},{"prompt":"A cache answers in **5 ms** and the database in **180 ms**. With a **99% hit ratio**, what's the average latency?","options":["92.5 ms","5 ms","6.8 ms","178.2 ms"],"answer":2,"explanation":"0.99 × 5 + 0.01 × (5 + 180) = 6.8 ms."},{"prompt":"A cache answers in **5 ms** and the database in **380 ms**. With a **50% hit ratio**, what's the average latency?","options":["192.5 ms","190 ms","195 ms","5 ms"],"answer":2,"explanation":"0.5 × 5 + 0.5 × (5 + 380) = 195 ms."},{"prompt":"A cache answers in **1 ms** and the database in **500 ms**. With a **95% hit ratio**, what's the average latency?","options":["250.5 ms","475 ms","26 ms","1 ms"],"answer":2,"explanation":"0.95 × 1 + 0.05 × (1 + 500) = 26 ms."},{"prompt":"A cache answers in **3 ms** and the database in **480 ms**. With a **60% hit ratio**, what's the average latency?","options":["288 ms","193.8 ms","195 ms","3 ms"],"answer":2,"explanation":"0.6 × 3 + 0.4 × (3 + 480) = 195 ms."}]
---
# Design Drill: Effective latency with a cache #12

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
