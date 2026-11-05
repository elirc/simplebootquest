---
slug: "sd01-littles-law-3"
title: "Design Drill: Little's law #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **550 requests/s**, and each takes **320 ms**. On average, how many requests are in flight at once?","options":["176,000","550","1.72","176"],"answer":3,"explanation":"550 × 0.32s = 176."},{"prompt":"An API handles **750 requests/s**, and each takes **600 ms**. On average, how many requests are in flight at once?","options":["1.25","450","450,000","750"],"answer":1,"explanation":"750 × 0.6s = 450."},{"prompt":"An API handles **2500 requests/s**, and each takes **600 ms**. On average, how many requests are in flight at once?","options":["4.17","1500","2500","1.5 million"],"answer":1,"explanation":"2500 × 0.6s = 1500."},{"prompt":"An API handles **2700 requests/s**, and each takes **180 ms**. On average, how many requests are in flight at once?","options":["486,000","2700","486","15"],"answer":2,"explanation":"2700 × 0.18s = 486."},{"prompt":"An API handles **3000 requests/s**, and each takes **680 ms**. On average, how many requests are in flight at once?","options":["2.04 million","2040","4.41","3000"],"answer":1,"explanation":"3000 × 0.68s = 2040."}]
---
# Design Drill: Little's law #3

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
