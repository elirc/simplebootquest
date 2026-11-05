---
slug: "sd01-littles-law-9"
title: "Design Drill: Little's law #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **2200 requests/s**, and each takes **40 ms**. On average, how many requests are in flight at once?","options":["88","2200","55","88,000"],"answer":0,"explanation":"2200 × 0.04s = 88."},{"prompt":"An API handles **2150 requests/s**, and each takes **640 ms**. On average, how many requests are in flight at once?","options":["1380","3.36","2150","1.38 million"],"answer":0,"explanation":"2150 × 0.64s = 1380."},{"prompt":"An API handles **2600 requests/s**, and each takes **540 ms**. On average, how many requests are in flight at once?","options":["4.81","2600","1400","1.4 million"],"answer":2,"explanation":"2600 × 0.54s = 1400."},{"prompt":"An API handles **700 requests/s**, and each takes **140 ms**. On average, how many requests are in flight at once?","options":["98","98,000","5","700"],"answer":0,"explanation":"700 × 0.14s = 98."},{"prompt":"An API handles **350 requests/s**, and each takes **20 ms**. On average, how many requests are in flight at once?","options":["7","17.5","350","7000"],"answer":0,"explanation":"350 × 0.02s = 7."}]
---
# Design Drill: Little's law #9

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
