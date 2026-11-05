---
slug: "sd01-littles-law-6"
title: "Design Drill: Little's law #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **2450 requests/s**, and each takes **320 ms**. On average, how many requests are in flight at once?","options":["2450","784,000","784","7.66"],"answer":2,"explanation":"2450 × 0.32s = 784."},{"prompt":"An API handles **1600 requests/s**, and each takes **760 ms**. On average, how many requests are in flight at once?","options":["1.22 million","2.11","1220","1600"],"answer":2,"explanation":"1600 × 0.76s = 1220."},{"prompt":"An API handles **800 requests/s**, and each takes **280 ms**. On average, how many requests are in flight at once?","options":["800","224,000","2.86","224"],"answer":3,"explanation":"800 × 0.28s = 224."},{"prompt":"An API handles **150 requests/s**, and each takes **400 ms**. On average, how many requests are in flight at once?","options":["150","60","60,000","0.375"],"answer":1,"explanation":"150 × 0.4s = 60."},{"prompt":"An API handles **1800 requests/s**, and each takes **500 ms**. On average, how many requests are in flight at once?","options":["900,000","3.6","1800","900"],"answer":3,"explanation":"1800 × 0.5s = 900."}]
---
# Design Drill: Little's law #6

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
