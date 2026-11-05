---
slug: "sd01-littles-law-60"
title: "Design Drill: Little's law #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **200 requests/s**, and each takes **340 ms**. On average, how many requests are in flight at once?","options":["200","68","68,000","0.588"],"answer":1,"explanation":"200 × 0.34s = 68."},{"prompt":"An API handles **2050 requests/s**, and each takes **240 ms**. On average, how many requests are in flight at once?","options":["2050","8.54","492,000","492"],"answer":3,"explanation":"2050 × 0.24s = 492."},{"prompt":"An API handles **2350 requests/s**, and each takes **240 ms**. On average, how many requests are in flight at once?","options":["9.79","2350","564,000","564"],"answer":3,"explanation":"2350 × 0.24s = 564."},{"prompt":"An API handles **1400 requests/s**, and each takes **640 ms**. On average, how many requests are in flight at once?","options":["896","896,000","2.19","1400"],"answer":0,"explanation":"1400 × 0.64s = 896."},{"prompt":"An API handles **750 requests/s**, and each takes **800 ms**. On average, how many requests are in flight at once?","options":["600","600,000","0.938","750"],"answer":0,"explanation":"750 × 0.8s = 600."}]
---
# Design Drill: Little's law #60

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
