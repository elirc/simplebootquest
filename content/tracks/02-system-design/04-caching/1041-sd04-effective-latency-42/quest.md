---
slug: "sd04-effective-latency-42"
title: "Design Drill: Effective latency with a cache #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A cache answers in **5 ms** and the database in **450 ms**. With a **95% hit ratio**, what's the average latency?","options":["427.5 ms","27.5 ms","5 ms","27.3 ms"],"answer":1,"explanation":"0.95 × 5 + 0.05 × (5 + 450) = 27.5 ms."},{"prompt":"A cache answers in **3 ms** and the database in **100 ms**. With a **60% hit ratio**, what's the average latency?","options":["3 ms","60 ms","41.8 ms","43 ms"],"answer":3,"explanation":"0.6 × 3 + 0.4 × (3 + 100) = 43 ms."},{"prompt":"A cache answers in **2 ms** and the database in **200 ms**. With a **60% hit ratio**, what's the average latency?","options":["81.2 ms","2 ms","82 ms","120 ms"],"answer":2,"explanation":"0.6 × 2 + 0.4 × (2 + 200) = 82 ms."},{"prompt":"A cache answers in **2 ms** and the database in **40 ms**. With a **90% hit ratio**, what's the average latency?","options":["6 ms","5.8 ms","36 ms","2 ms"],"answer":0,"explanation":"0.9 × 2 + 0.1 × (2 + 40) = 6 ms."},{"prompt":"A cache answers in **1 ms** and the database in **430 ms**. With a **50% hit ratio**, what's the average latency?","options":["215 ms","1 ms","215.5 ms","216 ms"],"answer":3,"explanation":"0.5 × 1 + 0.5 × (1 + 430) = 216 ms."}]
---
# Design Drill: Effective latency with a cache #42

Average latency = hit ratio × cache latency + (1 − hit ratio) × (cache latency + backend latency). A miss pays for the cache check *and* the backend.
