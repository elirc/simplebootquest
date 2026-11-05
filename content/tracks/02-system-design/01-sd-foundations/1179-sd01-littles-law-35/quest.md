---
slug: "sd01-littles-law-35"
title: "Design Drill: Little's law #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **2250 requests/s**, and each takes **440 ms**. On average, how many requests are in flight at once?","options":["990,000","2250","5.11","990"],"answer":3,"explanation":"2250 × 0.44s = 990."},{"prompt":"An API handles **550 requests/s**, and each takes **760 ms**. On average, how many requests are in flight at once?","options":["550","418,000","418","0.724"],"answer":2,"explanation":"550 × 0.76s = 418."},{"prompt":"An API handles **1650 requests/s**, and each takes **260 ms**. On average, how many requests are in flight at once?","options":["429","1650","429,000","6.35"],"answer":0,"explanation":"1650 × 0.26s = 429."},{"prompt":"An API handles **2000 requests/s**, and each takes **780 ms**. On average, how many requests are in flight at once?","options":["2.56","2000","1.56 million","1560"],"answer":3,"explanation":"2000 × 0.78s = 1560."},{"prompt":"An API handles **2850 requests/s**, and each takes **140 ms**. On average, how many requests are in flight at once?","options":["399","2850","20.4","399,000"],"answer":0,"explanation":"2850 × 0.14s = 399."}]
---
# Design Drill: Little's law #35

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
