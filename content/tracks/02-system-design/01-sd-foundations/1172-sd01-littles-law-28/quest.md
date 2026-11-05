---
slug: "sd01-littles-law-28"
title: "Design Drill: Little's law #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **300 requests/s**, and each takes **480 ms**. On average, how many requests are in flight at once?","options":["144,000","144","0.625","300"],"answer":1,"explanation":"300 × 0.48s = 144."},{"prompt":"An API handles **500 requests/s**, and each takes **660 ms**. On average, how many requests are in flight at once?","options":["0.758","500","330,000","330"],"answer":3,"explanation":"500 × 0.66s = 330."},{"prompt":"An API handles **1000 requests/s**, and each takes **20 ms**. On average, how many requests are in flight at once?","options":["20,000","20","1000","50"],"answer":1,"explanation":"1000 × 0.02s = 20."},{"prompt":"An API handles **950 requests/s**, and each takes **420 ms**. On average, how many requests are in flight at once?","options":["950","399","399,000","2.26"],"answer":1,"explanation":"950 × 0.42s = 399."},{"prompt":"An API handles **1450 requests/s**, and each takes **680 ms**. On average, how many requests are in flight at once?","options":["986","2.13","1450","986,000"],"answer":0,"explanation":"1450 × 0.68s = 986."}]
---
# Design Drill: Little's law #28

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
