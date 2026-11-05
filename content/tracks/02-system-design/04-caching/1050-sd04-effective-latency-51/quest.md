---
slug: "sd04-effective-latency-51"
title: "Design Drill: Effective latency with a cache #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **4 ms** and the database in **430 ms**. With a **85% hit ratio**, what's the average latency?","options":["67.9 ms","365.5 ms","68.5 ms","4 ms"],"answer":2,"explanation":"0.85 × 4 + 0.15 × (4 + 430) = 68.5 ms."},{"prompt":"A cache answers in **5 ms** and the database in **310 ms**. With a **75% hit ratio**, what's the average latency?","options":["81.3 ms","82.5 ms","232.5 ms","5 ms"],"answer":1,"explanation":"0.75 × 5 + 0.25 × (5 + 310) = 82.5 ms."},{"prompt":"A cache answers in **2 ms** and the database in **400 ms**. With a **98% hit ratio**, what's the average latency?","options":["392 ms","2 ms","201 ms","10 ms"],"answer":3,"explanation":"0.98 × 2 + 0.02 × (2 + 400) = 10 ms."},{"prompt":"A cache answers in **1 ms** and the database in **310 ms**. With a **85% hit ratio**, what's the average latency?","options":["1 ms","47.4 ms","47.5 ms","263.5 ms"],"answer":2,"explanation":"0.85 × 1 + 0.15 × (1 + 310) = 47.5 ms."},{"prompt":"A cache answers in **2 ms** and the database in **60 ms**. With a **85% hit ratio**, what's the average latency?","options":["51 ms","11 ms","10.7 ms","2 ms"],"answer":1,"explanation":"0.85 × 2 + 0.15 × (2 + 60) = 11 ms."}]
---
# Design Drill: Effective latency with a cache #51

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
