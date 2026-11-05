---
slug: "sd04-effective-latency-45"
title: "Design Drill: Effective latency with a cache #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **3 ms** and the database in **230 ms**. With a **90% hit ratio**, what's the average latency?","options":["25.7 ms","26 ms","207 ms","3 ms"],"answer":1,"explanation":"0.9 × 3 + 0.1 × (3 + 230) = 26 ms."},{"prompt":"A cache answers in **4 ms** and the database in **340 ms**. With a **90% hit ratio**, what's the average latency?","options":["37.6 ms","38 ms","306 ms","4 ms"],"answer":1,"explanation":"0.9 × 4 + 0.1 × (4 + 340) = 38 ms."},{"prompt":"A cache answers in **3 ms** and the database in **160 ms**. With a **75% hit ratio**, what's the average latency?","options":["42.3 ms","43 ms","3 ms","120 ms"],"answer":1,"explanation":"0.75 × 3 + 0.25 × (3 + 160) = 43 ms."},{"prompt":"A cache answers in **2 ms** and the database in **260 ms**. With a **60% hit ratio**, what's the average latency?","options":["2 ms","106 ms","156 ms","105.2 ms"],"answer":1,"explanation":"0.6 × 2 + 0.4 × (2 + 260) = 106 ms."},{"prompt":"A cache answers in **3 ms** and the database in **200 ms**. With a **75% hit ratio**, what's the average latency?","options":["52.3 ms","3 ms","53 ms","150 ms"],"answer":2,"explanation":"0.75 × 3 + 0.25 × (3 + 200) = 53 ms."}]
---
# Design Drill: Effective latency with a cache #45

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
