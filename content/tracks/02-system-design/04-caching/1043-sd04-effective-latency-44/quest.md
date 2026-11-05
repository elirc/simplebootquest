---
slug: "sd04-effective-latency-44"
title: "Design Drill: Effective latency with a cache #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **5 ms** and the database in **330 ms**. With a **99% hit ratio**, what's the average latency?","options":["326.7 ms","167.5 ms","5 ms","8.3 ms"],"answer":3,"explanation":"0.99 × 5 + 0.01 × (5 + 330) = 8.3 ms."},{"prompt":"A cache answers in **5 ms** and the database in **250 ms**. With a **50% hit ratio**, what's the average latency?","options":["130 ms","127.5 ms","125 ms","5 ms"],"answer":0,"explanation":"0.5 × 5 + 0.5 × (5 + 250) = 130 ms."},{"prompt":"A cache answers in **4 ms** and the database in **370 ms**. With a **99% hit ratio**, what's the average latency?","options":["187 ms","366.3 ms","4 ms","7.7 ms"],"answer":3,"explanation":"0.99 × 4 + 0.01 × (4 + 370) = 7.7 ms."},{"prompt":"A cache answers in **2 ms** and the database in **470 ms**. With a **99% hit ratio**, what's the average latency?","options":["6.7 ms","465.3 ms","2 ms","236 ms"],"answer":0,"explanation":"0.99 × 2 + 0.01 × (2 + 470) = 6.7 ms."},{"prompt":"A cache answers in **1 ms** and the database in **250 ms**. With a **75% hit ratio**, what's the average latency?","options":["63.5 ms","1 ms","187.5 ms","63.3 ms"],"answer":0,"explanation":"0.75 × 1 + 0.25 × (1 + 250) = 63.5 ms."}]
---
# Design Drill: Effective latency with a cache #44

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
