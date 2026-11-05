---
slug: "sd01-littles-law-21"
title: "Design Drill: Little's law #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **2650 requests/s**, and each takes **340 ms**. On average, how many requests are in flight at once?","options":["901","901,000","7.79","2650"],"answer":0,"explanation":"2650 × 0.34s = 901."},{"prompt":"An API handles **1850 requests/s**, and each takes **800 ms**. On average, how many requests are in flight at once?","options":["1850","1.48 million","2.31","1480"],"answer":3,"explanation":"1850 × 0.8s = 1480."},{"prompt":"An API handles **1600 requests/s**, and each takes **240 ms**. On average, how many requests are in flight at once?","options":["6.67","1600","384","384,000"],"answer":2,"explanation":"1600 × 0.24s = 384."},{"prompt":"An API handles **2550 requests/s**, and each takes **440 ms**. On average, how many requests are in flight at once?","options":["1120","2550","5.8","1.12 million"],"answer":0,"explanation":"2550 × 0.44s = 1120."},{"prompt":"An API handles **2200 requests/s**, and each takes **800 ms**. On average, how many requests are in flight at once?","options":["1760","2200","2.75","1.76 million"],"answer":0,"explanation":"2200 × 0.8s = 1760."}]
---
# Design Drill: Little's law #21

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
