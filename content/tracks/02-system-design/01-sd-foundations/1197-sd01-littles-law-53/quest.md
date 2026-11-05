---
slug: "sd01-littles-law-53"
title: "Design Drill: Little's law #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **1600 requests/s**, and each takes **560 ms**. On average, how many requests are in flight at once?","options":["2.86","896,000","1600","896"],"answer":3,"explanation":"1600 × 0.56s = 896."},{"prompt":"An API handles **2900 requests/s**, and each takes **780 ms**. On average, how many requests are in flight at once?","options":["2260","3.72","2.26 million","2900"],"answer":0,"explanation":"2900 × 0.78s = 2260."},{"prompt":"An API handles **1550 requests/s**, and each takes **80 ms**. On average, how many requests are in flight at once?","options":["1550","124","19.4","124,000"],"answer":1,"explanation":"1550 × 0.08s = 124."},{"prompt":"An API handles **350 requests/s**, and each takes **400 ms**. On average, how many requests are in flight at once?","options":["0.875","140","140,000","350"],"answer":1,"explanation":"350 × 0.4s = 140."},{"prompt":"An API handles **2750 requests/s**, and each takes **160 ms**. On average, how many requests are in flight at once?","options":["17.2","2750","440","440,000"],"answer":2,"explanation":"2750 × 0.16s = 440."}]
---
# Design Drill: Little's law #53

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
