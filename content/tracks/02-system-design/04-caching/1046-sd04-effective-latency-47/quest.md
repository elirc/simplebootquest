---
slug: "sd04-effective-latency-47"
title: "Design Drill: Effective latency with a cache #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **1 ms** and the database in **290 ms**. With a **60% hit ratio**, what's the average latency?","options":["174 ms","117 ms","116.6 ms","1 ms"],"answer":1,"explanation":"0.6 × 1 + 0.4 × (1 + 290) = 117 ms."},{"prompt":"A cache answers in **5 ms** and the database in **210 ms**. With a **85% hit ratio**, what's the average latency?","options":["35.8 ms","178.5 ms","5 ms","36.5 ms"],"answer":3,"explanation":"0.85 × 5 + 0.15 × (5 + 210) = 36.5 ms."},{"prompt":"A cache answers in **5 ms** and the database in **40 ms**. With a **90% hit ratio**, what's the average latency?","options":["9 ms","36 ms","5 ms","8.5 ms"],"answer":0,"explanation":"0.9 × 5 + 0.1 × (5 + 40) = 9 ms."},{"prompt":"A cache answers in **3 ms** and the database in **490 ms**. With a **75% hit ratio**, what's the average latency?","options":["125.5 ms","124.8 ms","3 ms","367.5 ms"],"answer":0,"explanation":"0.75 × 3 + 0.25 × (3 + 490) = 125.5 ms."},{"prompt":"A cache answers in **4 ms** and the database in **220 ms**. With a **75% hit ratio**, what's the average latency?","options":["59 ms","4 ms","58 ms","165 ms"],"answer":0,"explanation":"0.75 × 4 + 0.25 × (4 + 220) = 59 ms."}]
---
# Design Drill: Effective latency with a cache #47

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
