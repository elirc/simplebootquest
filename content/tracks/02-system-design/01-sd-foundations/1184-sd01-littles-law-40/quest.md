---
slug: "sd01-littles-law-40"
title: "Design Drill: Little's law #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **1600 requests/s**, and each takes **20 ms**. On average, how many requests are in flight at once?","options":["32,000","1600","32","80"],"answer":2,"explanation":"1600 × 0.02s = 32."},{"prompt":"An API handles **2500 requests/s**, and each takes **780 ms**. On average, how many requests are in flight at once?","options":["1950","3.21","1.95 million","2500"],"answer":0,"explanation":"2500 × 0.78s = 1950."},{"prompt":"An API handles **1550 requests/s**, and each takes **660 ms**. On average, how many requests are in flight at once?","options":["2.35","1.02 million","1550","1020"],"answer":3,"explanation":"1550 × 0.66s = 1020."},{"prompt":"An API handles **1250 requests/s**, and each takes **360 ms**. On average, how many requests are in flight at once?","options":["450","1250","450,000","3.47"],"answer":0,"explanation":"1250 × 0.36s = 450."},{"prompt":"An API handles **2500 requests/s**, and each takes **160 ms**. On average, how many requests are in flight at once?","options":["400,000","15.6","2500","400"],"answer":3,"explanation":"2500 × 0.16s = 400."}]
---
# Design Drill: Little's law #40

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
