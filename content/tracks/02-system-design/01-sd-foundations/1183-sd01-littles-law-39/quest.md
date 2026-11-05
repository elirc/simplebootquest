---
slug: "sd01-littles-law-39"
title: "Design Drill: Little's law #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **1050 requests/s**, and each takes **520 ms**. On average, how many requests are in flight at once?","options":["1050","546,000","546","2.02"],"answer":2,"explanation":"1050 × 0.52s = 546."},{"prompt":"An API handles **1100 requests/s**, and each takes **340 ms**. On average, how many requests are in flight at once?","options":["1100","374","374,000","3.24"],"answer":1,"explanation":"1100 × 0.34s = 374."},{"prompt":"An API handles **300 requests/s**, and each takes **400 ms**. On average, how many requests are in flight at once?","options":["0.75","120,000","300","120"],"answer":3,"explanation":"300 × 0.4s = 120."},{"prompt":"An API handles **1100 requests/s**, and each takes **160 ms**. On average, how many requests are in flight at once?","options":["176,000","176","1100","6.88"],"answer":1,"explanation":"1100 × 0.16s = 176."},{"prompt":"An API handles **600 requests/s**, and each takes **760 ms**. On average, how many requests are in flight at once?","options":["456","600","456,000","0.789"],"answer":0,"explanation":"600 × 0.76s = 456."}]
---
# Design Drill: Little's law #39

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
