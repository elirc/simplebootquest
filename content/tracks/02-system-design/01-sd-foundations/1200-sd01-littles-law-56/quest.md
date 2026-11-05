---
slug: "sd01-littles-law-56"
title: "Design Drill: Little's law #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **300 requests/s**, and each takes **200 ms**. On average, how many requests are in flight at once?","options":["60","300","1.5","60,000"],"answer":0,"explanation":"300 × 0.2s = 60."},{"prompt":"An API handles **600 requests/s**, and each takes **600 ms**. On average, how many requests are in flight at once?","options":["360,000","360","600","1"],"answer":1,"explanation":"600 × 0.6s = 360."},{"prompt":"An API handles **500 requests/s**, and each takes **120 ms**. On average, how many requests are in flight at once?","options":["500","60,000","60","4.17"],"answer":2,"explanation":"500 × 0.12s = 60."},{"prompt":"An API handles **1550 requests/s**, and each takes **580 ms**. On average, how many requests are in flight at once?","options":["2.67","899","899,000","1550"],"answer":1,"explanation":"1550 × 0.58s = 899."},{"prompt":"An API handles **2150 requests/s**, and each takes **380 ms**. On average, how many requests are in flight at once?","options":["5.66","817","2150","817,000"],"answer":1,"explanation":"2150 × 0.38s = 817."}]
---
# Design Drill: Little's law #56

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
