---
slug: "sd01-littles-law-4"
title: "Design Drill: Little's law #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **1800 requests/s**, and each takes **760 ms**. On average, how many requests are in flight at once?","options":["2.37","1.37 million","1800","1370"],"answer":3,"explanation":"1800 × 0.76s = 1370."},{"prompt":"An API handles **600 requests/s**, and each takes **740 ms**. On average, how many requests are in flight at once?","options":["444,000","444","600","0.811"],"answer":1,"explanation":"600 × 0.74s = 444."},{"prompt":"An API handles **2600 requests/s**, and each takes **280 ms**. On average, how many requests are in flight at once?","options":["728","728,000","9.29","2600"],"answer":0,"explanation":"2600 × 0.28s = 728."},{"prompt":"An API handles **750 requests/s**, and each takes **200 ms**. On average, how many requests are in flight at once?","options":["150,000","3.75","750","150"],"answer":3,"explanation":"750 × 0.2s = 150."},{"prompt":"An API handles **1900 requests/s**, and each takes **360 ms**. On average, how many requests are in flight at once?","options":["1900","684","684,000","5.28"],"answer":1,"explanation":"1900 × 0.36s = 684."}]
---
# Design Drill: Little's law #4

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
