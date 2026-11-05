---
slug: "sd04-effective-latency-3"
title: "Design Drill: Effective latency with a cache #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **4 ms** and the database in **120 ms**. With a **75% hit ratio**, what's the average latency?","options":["33 ms","4 ms","90 ms","34 ms"],"answer":3,"explanation":"0.75 × 4 + 0.25 × (4 + 120) = 34 ms."},{"prompt":"A cache answers in **3 ms** and the database in **60 ms**. With a **60% hit ratio**, what's the average latency?","options":["3 ms","36 ms","27 ms","25.8 ms"],"answer":2,"explanation":"0.6 × 3 + 0.4 × (3 + 60) = 27 ms."},{"prompt":"A cache answers in **2 ms** and the database in **300 ms**. With a **98% hit ratio**, what's the average latency?","options":["151 ms","8 ms","2 ms","294 ms"],"answer":1,"explanation":"0.98 × 2 + 0.02 × (2 + 300) = 8 ms."},{"prompt":"A cache answers in **5 ms** and the database in **240 ms**. With a **80% hit ratio**, what's the average latency?","options":["192 ms","52 ms","5 ms","53 ms"],"answer":3,"explanation":"0.8 × 5 + 0.2 × (5 + 240) = 53 ms."},{"prompt":"A cache answers in **4 ms** and the database in **30 ms**. With a **75% hit ratio**, what's the average latency?","options":["10.5 ms","22.5 ms","4 ms","11.5 ms"],"answer":3,"explanation":"0.75 × 4 + 0.25 × (4 + 30) = 11.5 ms."}]
---
# Design Drill: Effective latency with a cache #3

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
