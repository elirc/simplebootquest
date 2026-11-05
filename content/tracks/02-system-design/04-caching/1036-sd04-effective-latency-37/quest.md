---
slug: "sd04-effective-latency-37"
title: "Design Drill: Effective latency with a cache #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **3 ms** and the database in **250 ms**. With a **90% hit ratio**, what's the average latency?","options":["3 ms","28 ms","225 ms","27.7 ms"],"answer":1,"explanation":"0.9 × 3 + 0.1 × (3 + 250) = 28 ms."},{"prompt":"A cache answers in **3 ms** and the database in **370 ms**. With a **90% hit ratio**, what's the average latency?","options":["40 ms","39.7 ms","3 ms","333 ms"],"answer":0,"explanation":"0.9 × 3 + 0.1 × (3 + 370) = 40 ms."},{"prompt":"A cache answers in **3 ms** and the database in **200 ms**. With a **90% hit ratio**, what's the average latency?","options":["3 ms","180 ms","22.7 ms","23 ms"],"answer":3,"explanation":"0.9 × 3 + 0.1 × (3 + 200) = 23 ms."},{"prompt":"A cache answers in **3 ms** and the database in **340 ms**. With a **98% hit ratio**, what's the average latency?","options":["9.8 ms","3 ms","333.2 ms","9.7 ms"],"answer":0,"explanation":"0.98 × 3 + 0.02 × (3 + 340) = 9.8 ms."},{"prompt":"A cache answers in **1 ms** and the database in **330 ms**. With a **50% hit ratio**, what's the average latency?","options":["165.5 ms","1 ms","165 ms","166 ms"],"answer":3,"explanation":"0.5 × 1 + 0.5 × (1 + 330) = 166 ms."}]
---
# Design Drill: Effective latency with a cache #37

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
