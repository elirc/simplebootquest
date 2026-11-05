---
slug: "sd01-littles-law-2"
title: "Design Drill: Little's law #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **950 requests/s**, and each takes **480 ms**. On average, how many requests are in flight at once?","options":["1.98","456","456,000","950"],"answer":1,"explanation":"950 × 0.48s = 456."},{"prompt":"An API handles **1550 requests/s**, and each takes **200 ms**. On average, how many requests are in flight at once?","options":["310","1550","310,000","7.75"],"answer":0,"explanation":"1550 × 0.2s = 310."},{"prompt":"An API handles **2700 requests/s**, and each takes **380 ms**. On average, how many requests are in flight at once?","options":["1.03 million","7.11","1030","2700"],"answer":2,"explanation":"2700 × 0.38s = 1030."},{"prompt":"An API handles **950 requests/s**, and each takes **640 ms**. On average, how many requests are in flight at once?","options":["1.48","608,000","950","608"],"answer":3,"explanation":"950 × 0.64s = 608."},{"prompt":"An API handles **1200 requests/s**, and each takes **120 ms**. On average, how many requests are in flight at once?","options":["1200","144,000","10","144"],"answer":3,"explanation":"1200 × 0.12s = 144."}]
---
# Design Drill: Little's law #2

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
