---
slug: "sd04-effective-latency-38"
title: "Design Drill: Effective latency with a cache #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **4 ms** and the database in **70 ms**. With a **75% hit ratio**, what's the average latency?","options":["21.5 ms","52.5 ms","4 ms","20.5 ms"],"answer":0,"explanation":"0.75 × 4 + 0.25 × (4 + 70) = 21.5 ms."},{"prompt":"A cache answers in **3 ms** and the database in **430 ms**. With a **90% hit ratio**, what's the average latency?","options":["46 ms","387 ms","3 ms","45.7 ms"],"answer":0,"explanation":"0.9 × 3 + 0.1 × (3 + 430) = 46 ms."},{"prompt":"A cache answers in **2 ms** and the database in **250 ms**. With a **80% hit ratio**, what's the average latency?","options":["51.6 ms","2 ms","200 ms","52 ms"],"answer":3,"explanation":"0.8 × 2 + 0.2 × (2 + 250) = 52 ms."},{"prompt":"A cache answers in **2 ms** and the database in **110 ms**. With a **98% hit ratio**, what's the average latency?","options":["2 ms","107.8 ms","56 ms","4.2 ms"],"answer":3,"explanation":"0.98 × 2 + 0.02 × (2 + 110) = 4.2 ms."},{"prompt":"A cache answers in **3 ms** and the database in **170 ms**. With a **98% hit ratio**, what's the average latency?","options":["6.3 ms","3 ms","6.4 ms","166.6 ms"],"answer":2,"explanation":"0.98 × 3 + 0.02 × (3 + 170) = 6.4 ms."}]
---
# Design Drill: Effective latency with a cache #38

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
