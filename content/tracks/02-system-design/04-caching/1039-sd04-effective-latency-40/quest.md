---
slug: "sd04-effective-latency-40"
title: "Design Drill: Effective latency with a cache #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **3 ms** and the database in **170 ms**. With a **50% hit ratio**, what's the average latency?","options":["3 ms","86.5 ms","88 ms","85 ms"],"answer":2,"explanation":"0.5 × 3 + 0.5 × (3 + 170) = 88 ms."},{"prompt":"A cache answers in **1 ms** and the database in **80 ms**. With a **85% hit ratio**, what's the average latency?","options":["68 ms","13 ms","1 ms","12.9 ms"],"answer":1,"explanation":"0.85 × 1 + 0.15 × (1 + 80) = 13 ms."},{"prompt":"A cache answers in **3 ms** and the database in **440 ms**. With a **50% hit ratio**, what's the average latency?","options":["220 ms","3 ms","223 ms","221.5 ms"],"answer":2,"explanation":"0.5 × 3 + 0.5 × (3 + 440) = 223 ms."},{"prompt":"A cache answers in **2 ms** and the database in **240 ms**. With a **60% hit ratio**, what's the average latency?","options":["97.2 ms","2 ms","98 ms","144 ms"],"answer":2,"explanation":"0.6 × 2 + 0.4 × (2 + 240) = 98 ms."},{"prompt":"A cache answers in **1 ms** and the database in **180 ms**. With a **80% hit ratio**, what's the average latency?","options":["144 ms","37 ms","36.8 ms","1 ms"],"answer":1,"explanation":"0.8 × 1 + 0.2 × (1 + 180) = 37 ms."}]
---
# Design Drill: Effective latency with a cache #40

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
