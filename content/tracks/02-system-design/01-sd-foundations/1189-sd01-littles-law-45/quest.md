---
slug: "sd01-littles-law-45"
title: "Design Drill: Little's law #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **1150 requests/s**, and each takes **660 ms**. On average, how many requests are in flight at once?","options":["1150","1.74","759,000","759"],"answer":3,"explanation":"1150 × 0.66s = 759."},{"prompt":"An API handles **1250 requests/s**, and each takes **80 ms**. On average, how many requests are in flight at once?","options":["100","15.6","100,000","1250"],"answer":0,"explanation":"1250 × 0.08s = 100."},{"prompt":"An API handles **1800 requests/s**, and each takes **80 ms**. On average, how many requests are in flight at once?","options":["22.5","144,000","144","1800"],"answer":2,"explanation":"1800 × 0.08s = 144."},{"prompt":"An API handles **1850 requests/s**, and each takes **420 ms**. On average, how many requests are in flight at once?","options":["1850","4.4","777,000","777"],"answer":3,"explanation":"1850 × 0.42s = 777."},{"prompt":"An API handles **2650 requests/s**, and each takes **640 ms**. On average, how many requests are in flight at once?","options":["4.14","1700","2650","1.7 million"],"answer":1,"explanation":"2650 × 0.64s = 1700."}]
---
# Design Drill: Little's law #45

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
