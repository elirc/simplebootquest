---
slug: "sd01-littles-law-15"
title: "Design Drill: Little's law #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **750 requests/s**, and each takes **80 ms**. On average, how many requests are in flight at once?","options":["60","9.38","750","60,000"],"answer":0,"explanation":"750 × 0.08s = 60."},{"prompt":"An API handles **2450 requests/s**, and each takes **540 ms**. On average, how many requests are in flight at once?","options":["4.54","1.32 million","1320","2450"],"answer":2,"explanation":"2450 × 0.54s = 1320."},{"prompt":"An API handles **1000 requests/s**, and each takes **540 ms**. On average, how many requests are in flight at once?","options":["540","1000","540,000","1.85"],"answer":0,"explanation":"1000 × 0.54s = 540."},{"prompt":"An API handles **250 requests/s**, and each takes **500 ms**. On average, how many requests are in flight at once?","options":["125,000","250","0.5","125"],"answer":3,"explanation":"250 × 0.5s = 125."},{"prompt":"An API handles **2100 requests/s**, and each takes **760 ms**. On average, how many requests are in flight at once?","options":["2100","1600","2.76","1.6 million"],"answer":1,"explanation":"2100 × 0.76s = 1600."}]
---
# Design Drill: Little's law #15

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
