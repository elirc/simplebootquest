---
slug: "sd01-littles-law-46"
title: "Design Drill: Little's law #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **600 requests/s**, and each takes **300 ms**. On average, how many requests are in flight at once?","options":["180,000","180","600","2"],"answer":1,"explanation":"600 × 0.3s = 180."},{"prompt":"An API handles **2450 requests/s**, and each takes **760 ms**. On average, how many requests are in flight at once?","options":["1.86 million","1860","3.22","2450"],"answer":1,"explanation":"2450 × 0.76s = 1860."},{"prompt":"An API handles **2700 requests/s**, and each takes **260 ms**. On average, how many requests are in flight at once?","options":["702","10.4","2700","702,000"],"answer":0,"explanation":"2700 × 0.26s = 702."},{"prompt":"An API handles **600 requests/s**, and each takes **660 ms**. On average, how many requests are in flight at once?","options":["396","396,000","0.909","600"],"answer":0,"explanation":"600 × 0.66s = 396."},{"prompt":"An API handles **1400 requests/s**, and each takes **540 ms**. On average, how many requests are in flight at once?","options":["756","2.59","756,000","1400"],"answer":0,"explanation":"1400 × 0.54s = 756."}]
---
# Design Drill: Little's law #46

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
