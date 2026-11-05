---
slug: "sd01-littles-law-51"
title: "Design Drill: Little's law #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **2350 requests/s**, and each takes **380 ms**. On average, how many requests are in flight at once?","options":["2350","893","6.18","893,000"],"answer":1,"explanation":"2350 × 0.38s = 893."},{"prompt":"An API handles **900 requests/s**, and each takes **460 ms**. On average, how many requests are in flight at once?","options":["900","1.96","414,000","414"],"answer":3,"explanation":"900 × 0.46s = 414."},{"prompt":"An API handles **2350 requests/s**, and each takes **500 ms**. On average, how many requests are in flight at once?","options":["1.18 million","4.7","2350","1180"],"answer":3,"explanation":"2350 × 0.5s = 1180."},{"prompt":"An API handles **1850 requests/s**, and each takes **500 ms**. On average, how many requests are in flight at once?","options":["1850","925,000","3.7","925"],"answer":3,"explanation":"1850 × 0.5s = 925."},{"prompt":"An API handles **3000 requests/s**, and each takes **460 ms**. On average, how many requests are in flight at once?","options":["1380","3000","1.38 million","6.52"],"answer":0,"explanation":"3000 × 0.46s = 1380."}]
---
# Design Drill: Little's law #51

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
