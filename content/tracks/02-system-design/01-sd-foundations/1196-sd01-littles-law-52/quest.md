---
slug: "sd01-littles-law-52"
title: "Design Drill: Little's law #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **250 requests/s**, and each takes **340 ms**. On average, how many requests are in flight at once?","options":["0.735","250","85,000","85"],"answer":3,"explanation":"250 × 0.34s = 85."},{"prompt":"An API handles **1650 requests/s**, and each takes **800 ms**. On average, how many requests are in flight at once?","options":["1320","1650","1.32 million","2.06"],"answer":0,"explanation":"1650 × 0.8s = 1320."},{"prompt":"An API handles **150 requests/s**, and each takes **460 ms**. On average, how many requests are in flight at once?","options":["150","0.326","69,000","69"],"answer":3,"explanation":"150 × 0.46s = 69."},{"prompt":"An API handles **2450 requests/s**, and each takes **300 ms**. On average, how many requests are in flight at once?","options":["735","735,000","8.17","2450"],"answer":0,"explanation":"2450 × 0.3s = 735."},{"prompt":"An API handles **200 requests/s**, and each takes **660 ms**. On average, how many requests are in flight at once?","options":["200","132,000","0.303","132"],"answer":3,"explanation":"200 × 0.66s = 132."}]
---
# Design Drill: Little's law #52

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
