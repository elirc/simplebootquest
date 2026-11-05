---
slug: "sd04-effective-latency-26"
title: "Design Drill: Effective latency with a cache #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **5 ms** and the database in **200 ms**. With a **90% hit ratio**, what's the average latency?","options":["25 ms","24.5 ms","5 ms","180 ms"],"answer":0,"explanation":"0.9 × 5 + 0.1 × (5 + 200) = 25 ms."},{"prompt":"A cache answers in **4 ms** and the database in **260 ms**. With a **90% hit ratio**, what's the average latency?","options":["30 ms","29.6 ms","234 ms","4 ms"],"answer":0,"explanation":"0.9 × 4 + 0.1 × (4 + 260) = 30 ms."},{"prompt":"A cache answers in **4 ms** and the database in **210 ms**. With a **75% hit ratio**, what's the average latency?","options":["56.5 ms","4 ms","55.5 ms","157.5 ms"],"answer":0,"explanation":"0.75 × 4 + 0.25 × (4 + 210) = 56.5 ms."},{"prompt":"A cache answers in **4 ms** and the database in **430 ms**. With a **75% hit ratio**, what's the average latency?","options":["111.5 ms","322.5 ms","4 ms","110.5 ms"],"answer":0,"explanation":"0.75 × 4 + 0.25 × (4 + 430) = 111.5 ms."},{"prompt":"A cache answers in **3 ms** and the database in **150 ms**. With a **60% hit ratio**, what's the average latency?","options":["63 ms","3 ms","61.8 ms","90 ms"],"answer":0,"explanation":"0.6 × 3 + 0.4 × (3 + 150) = 63 ms."}]
---
# Design Drill: Effective latency with a cache #26

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
