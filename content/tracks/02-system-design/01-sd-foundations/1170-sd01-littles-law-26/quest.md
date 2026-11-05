---
slug: "sd01-littles-law-26"
title: "Design Drill: Little's law #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **850 requests/s**, and each takes **100 ms**. On average, how many requests are in flight at once?","options":["8.5","85,000","85","850"],"answer":2,"explanation":"850 × 0.1s = 85."},{"prompt":"An API handles **2550 requests/s**, and each takes **160 ms**. On average, how many requests are in flight at once?","options":["408","15.9","408,000","2550"],"answer":0,"explanation":"2550 × 0.16s = 408."},{"prompt":"An API handles **2600 requests/s**, and each takes **400 ms**. On average, how many requests are in flight at once?","options":["2600","1040","6.5","1.04 million"],"answer":1,"explanation":"2600 × 0.4s = 1040."},{"prompt":"An API handles **1600 requests/s**, and each takes **580 ms**. On average, how many requests are in flight at once?","options":["2.76","928,000","928","1600"],"answer":2,"explanation":"1600 × 0.58s = 928."},{"prompt":"An API handles **2450 requests/s**, and each takes **800 ms**. On average, how many requests are in flight at once?","options":["1960","2450","1.96 million","3.06"],"answer":0,"explanation":"2450 × 0.8s = 1960."}]
---
# Design Drill: Little's law #26

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
