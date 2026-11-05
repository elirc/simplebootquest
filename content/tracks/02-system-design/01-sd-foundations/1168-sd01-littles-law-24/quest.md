---
slug: "sd01-littles-law-24"
title: "Design Drill: Little's law #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **1600 requests/s**, and each takes **740 ms**. On average, how many requests are in flight at once?","options":["1600","2.16","1180","1.18 million"],"answer":2,"explanation":"1600 × 0.74s = 1180."},{"prompt":"An API handles **2400 requests/s**, and each takes **740 ms**. On average, how many requests are in flight at once?","options":["1.78 million","1780","3.24","2400"],"answer":1,"explanation":"2400 × 0.74s = 1780."},{"prompt":"An API handles **1700 requests/s**, and each takes **800 ms**. On average, how many requests are in flight at once?","options":["2.13","1.36 million","1360","1700"],"answer":2,"explanation":"1700 × 0.8s = 1360."},{"prompt":"An API handles **750 requests/s**, and each takes **400 ms**. On average, how many requests are in flight at once?","options":["750","300","300,000","1.88"],"answer":1,"explanation":"750 × 0.4s = 300."},{"prompt":"An API handles **2700 requests/s**, and each takes **520 ms**. On average, how many requests are in flight at once?","options":["5.19","1.4 million","1400","2700"],"answer":2,"explanation":"2700 × 0.52s = 1400."}]
---
# Design Drill: Little's law #24

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
