---
slug: "sd01-littles-law-13"
title: "Design Drill: Little's law #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **100 requests/s**, and each takes **220 ms**. On average, how many requests are in flight at once?","options":["0.455","100","22,000","22"],"answer":3,"explanation":"100 × 0.22s = 22."},{"prompt":"An API handles **1300 requests/s**, and each takes **180 ms**. On average, how many requests are in flight at once?","options":["7.22","234","1300","234,000"],"answer":1,"explanation":"1300 × 0.18s = 234."},{"prompt":"An API handles **850 requests/s**, and each takes **60 ms**. On average, how many requests are in flight at once?","options":["51,000","850","51","14.2"],"answer":2,"explanation":"850 × 0.06s = 51."},{"prompt":"An API handles **1150 requests/s**, and each takes **240 ms**. On average, how many requests are in flight at once?","options":["276,000","276","1150","4.79"],"answer":1,"explanation":"1150 × 0.24s = 276."},{"prompt":"An API handles **2600 requests/s**, and each takes **580 ms**. On average, how many requests are in flight at once?","options":["4.48","1.51 million","2600","1510"],"answer":3,"explanation":"2600 × 0.58s = 1510."}]
---
# Design Drill: Little's law #13

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
