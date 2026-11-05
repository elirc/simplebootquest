---
slug: "sd04-effective-latency-13"
title: "Design Drill: Effective latency with a cache #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **5 ms** and the database in **420 ms**. With a **95% hit ratio**, what's the average latency?","options":["26 ms","5 ms","25.8 ms","399 ms"],"answer":0,"explanation":"0.95 × 5 + 0.05 × (5 + 420) = 26 ms."},{"prompt":"A cache answers in **1 ms** and the database in **280 ms**. With a **75% hit ratio**, what's the average latency?","options":["210 ms","1 ms","71 ms","70.8 ms"],"answer":2,"explanation":"0.75 × 1 + 0.25 × (1 + 280) = 71 ms."},{"prompt":"A cache answers in **2 ms** and the database in **230 ms**. With a **60% hit ratio**, what's the average latency?","options":["94 ms","2 ms","93.2 ms","138 ms"],"answer":0,"explanation":"0.6 × 2 + 0.4 × (2 + 230) = 94 ms."},{"prompt":"A cache answers in **4 ms** and the database in **220 ms**. With a **99% hit ratio**, what's the average latency?","options":["6.2 ms","217.8 ms","4 ms","112 ms"],"answer":0,"explanation":"0.99 × 4 + 0.01 × (4 + 220) = 6.2 ms."},{"prompt":"A cache answers in **1 ms** and the database in **240 ms**. With a **75% hit ratio**, what's the average latency?","options":["61 ms","1 ms","60.8 ms","180 ms"],"answer":0,"explanation":"0.75 × 1 + 0.25 × (1 + 240) = 61 ms."}]
---
# Design Drill: Effective latency with a cache #13

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
