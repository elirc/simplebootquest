---
slug: "sd04-effective-latency-34"
title: "Design Drill: Effective latency with a cache #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **5 ms** and the database in **220 ms**. With a **50% hit ratio**, what's the average latency?","options":["110 ms","115 ms","5 ms","112.5 ms"],"answer":1,"explanation":"0.5 × 5 + 0.5 × (5 + 220) = 115 ms."},{"prompt":"A cache answers in **1 ms** and the database in **270 ms**. With a **95% hit ratio**, what's the average latency?","options":["14.5 ms","1 ms","256.5 ms","135.5 ms"],"answer":0,"explanation":"0.95 × 1 + 0.05 × (1 + 270) = 14.5 ms."},{"prompt":"A cache answers in **5 ms** and the database in **230 ms**. With a **50% hit ratio**, what's the average latency?","options":["115 ms","120 ms","117.5 ms","5 ms"],"answer":1,"explanation":"0.5 × 5 + 0.5 × (5 + 230) = 120 ms."},{"prompt":"A cache answers in **2 ms** and the database in **180 ms**. With a **85% hit ratio**, what's the average latency?","options":["153 ms","28.7 ms","2 ms","29 ms"],"answer":3,"explanation":"0.85 × 2 + 0.15 × (2 + 180) = 29 ms."},{"prompt":"A cache answers in **3 ms** and the database in **160 ms**. With a **80% hit ratio**, what's the average latency?","options":["128 ms","34.4 ms","3 ms","35 ms"],"answer":3,"explanation":"0.8 × 3 + 0.2 × (3 + 160) = 35 ms."}]
---
# Design Drill: Effective latency with a cache #34

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
