---
slug: "sd04-effective-latency-49"
title: "Design Drill: Effective latency with a cache #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **1 ms** and the database in **410 ms**. With a **98% hit ratio**, what's the average latency?","options":["9.2 ms","205.5 ms","401.8 ms","1 ms"],"answer":0,"explanation":"0.98 × 1 + 0.02 × (1 + 410) = 9.2 ms."},{"prompt":"A cache answers in **5 ms** and the database in **480 ms**. With a **80% hit ratio**, what's the average latency?","options":["5 ms","384 ms","100 ms","101 ms"],"answer":3,"explanation":"0.8 × 5 + 0.2 × (5 + 480) = 101 ms."},{"prompt":"A cache answers in **4 ms** and the database in **400 ms**. With a **75% hit ratio**, what's the average latency?","options":["300 ms","4 ms","103 ms","104 ms"],"answer":3,"explanation":"0.75 × 4 + 0.25 × (4 + 400) = 104 ms."},{"prompt":"A cache answers in **3 ms** and the database in **390 ms**. With a **95% hit ratio**, what's the average latency?","options":["22.5 ms","22.4 ms","370.5 ms","3 ms"],"answer":0,"explanation":"0.95 × 3 + 0.05 × (3 + 390) = 22.5 ms."},{"prompt":"A cache answers in **2 ms** and the database in **140 ms**. With a **90% hit ratio**, what's the average latency?","options":["126 ms","16 ms","2 ms","15.8 ms"],"answer":1,"explanation":"0.9 × 2 + 0.1 × (2 + 140) = 16 ms."}]
---
# Design Drill: Effective latency with a cache #49

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
