---
slug: "sd04-effective-latency-25"
title: "Design Drill: Effective latency with a cache #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **4 ms** and the database in **350 ms**. With a **50% hit ratio**, what's the average latency?","options":["177 ms","175 ms","179 ms","4 ms"],"answer":2,"explanation":"0.5 × 4 + 0.5 × (4 + 350) = 179 ms."},{"prompt":"A cache answers in **3 ms** and the database in **490 ms**. With a **60% hit ratio**, what's the average latency?","options":["3 ms","197.8 ms","294 ms","199 ms"],"answer":3,"explanation":"0.6 × 3 + 0.4 × (3 + 490) = 199 ms."},{"prompt":"A cache answers in **2 ms** and the database in **120 ms**. With a **50% hit ratio**, what's the average latency?","options":["60 ms","61 ms","2 ms","62 ms"],"answer":3,"explanation":"0.5 × 2 + 0.5 × (2 + 120) = 62 ms."},{"prompt":"A cache answers in **4 ms** and the database in **40 ms**. With a **95% hit ratio**, what's the average latency?","options":["4 ms","38 ms","5.8 ms","6 ms"],"answer":3,"explanation":"0.95 × 4 + 0.05 × (4 + 40) = 6 ms."},{"prompt":"A cache answers in **2 ms** and the database in **220 ms**. With a **80% hit ratio**, what's the average latency?","options":["45.6 ms","2 ms","176 ms","46 ms"],"answer":3,"explanation":"0.8 × 2 + 0.2 × (2 + 220) = 46 ms."}]
---
# Design Drill: Effective latency with a cache #25

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
