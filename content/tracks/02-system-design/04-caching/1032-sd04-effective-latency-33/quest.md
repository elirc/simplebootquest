---
slug: "sd04-effective-latency-33"
title: "Design Drill: Effective latency with a cache #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **4 ms** and the database in **410 ms**. With a **95% hit ratio**, what's the average latency?","options":["4 ms","24.5 ms","24.3 ms","389.5 ms"],"answer":1,"explanation":"0.95 × 4 + 0.05 × (4 + 410) = 24.5 ms."},{"prompt":"A cache answers in **1 ms** and the database in **480 ms**. With a **99% hit ratio**, what's the average latency?","options":["1 ms","475.2 ms","240.5 ms","5.8 ms"],"answer":3,"explanation":"0.99 × 1 + 0.01 × (1 + 480) = 5.8 ms."},{"prompt":"A cache answers in **5 ms** and the database in **310 ms**. With a **50% hit ratio**, what's the average latency?","options":["160 ms","157.5 ms","155 ms","5 ms"],"answer":0,"explanation":"0.5 × 5 + 0.5 × (5 + 310) = 160 ms."},{"prompt":"A cache answers in **2 ms** and the database in **340 ms**. With a **75% hit ratio**, what's the average latency?","options":["255 ms","86.5 ms","2 ms","87 ms"],"answer":3,"explanation":"0.75 × 2 + 0.25 × (2 + 340) = 87 ms."},{"prompt":"A cache answers in **1 ms** and the database in **20 ms**. With a **95% hit ratio**, what's the average latency?","options":["19 ms","10.5 ms","2 ms","1 ms"],"answer":2,"explanation":"0.95 × 1 + 0.05 × (1 + 20) = 2 ms."}]
---
# Design Drill: Effective latency with a cache #33

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
