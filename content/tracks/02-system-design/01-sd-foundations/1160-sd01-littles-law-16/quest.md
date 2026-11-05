---
slug: "sd01-littles-law-16"
title: "Design Drill: Little's law #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **1750 requests/s**, and each takes **680 ms**. On average, how many requests are in flight at once?","options":["1.19 million","2.57","1190","1750"],"answer":2,"explanation":"1750 × 0.68s = 1190."},{"prompt":"An API handles **250 requests/s**, and each takes **300 ms**. On average, how many requests are in flight at once?","options":["250","75","0.833","75,000"],"answer":1,"explanation":"250 × 0.3s = 75."},{"prompt":"An API handles **1200 requests/s**, and each takes **300 ms**. On average, how many requests are in flight at once?","options":["1200","360","4","360,000"],"answer":1,"explanation":"1200 × 0.3s = 360."},{"prompt":"An API handles **1500 requests/s**, and each takes **100 ms**. On average, how many requests are in flight at once?","options":["1500","15","150,000","150"],"answer":3,"explanation":"1500 × 0.1s = 150."},{"prompt":"An API handles **1400 requests/s**, and each takes **100 ms**. On average, how many requests are in flight at once?","options":["14","140","1400","140,000"],"answer":1,"explanation":"1400 × 0.1s = 140."}]
---
# Design Drill: Little's law #16

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
