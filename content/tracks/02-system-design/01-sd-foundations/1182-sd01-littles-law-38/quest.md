---
slug: "sd01-littles-law-38"
title: "Design Drill: Little's law #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **1900 requests/s**, and each takes **580 ms**. On average, how many requests are in flight at once?","options":["1900","3.28","1.1 million","1100"],"answer":3,"explanation":"1900 × 0.58s = 1100."},{"prompt":"An API handles **450 requests/s**, and each takes **340 ms**. On average, how many requests are in flight at once?","options":["1.32","153,000","450","153"],"answer":3,"explanation":"450 × 0.34s = 153."},{"prompt":"An API handles **1750 requests/s**, and each takes **540 ms**. On average, how many requests are in flight at once?","options":["3.24","945","945,000","1750"],"answer":1,"explanation":"1750 × 0.54s = 945."},{"prompt":"An API handles **350 requests/s**, and each takes **180 ms**. On average, how many requests are in flight at once?","options":["63","63,000","350","1.94"],"answer":0,"explanation":"350 × 0.18s = 63."},{"prompt":"An API handles **400 requests/s**, and each takes **760 ms**. On average, how many requests are in flight at once?","options":["304","304,000","0.526","400"],"answer":0,"explanation":"400 × 0.76s = 304."}]
---
# Design Drill: Little's law #38

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
